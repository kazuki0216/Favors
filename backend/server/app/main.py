from fastapi import FastAPI, WebSocket, Depends
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import json
from contextlib import asynccontextmanager
# import psycopg2
from crud import post, get
from api import websocket_manager
from pydantic import BaseModel
from typing import List, Annotated
import models
from database import engine, SessionLocal, get_db
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # can alter with time
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserBase(BaseModel):
    user_id: str
    name: str


class JobBase(BaseModel):
    user_id: str
    job_id: str
    name: str
    title: str
    description: str
    location: str
    coordinates: str
    price: int
    created_at: str
    is_complete: bool

class BookMark(BaseModel):
    user_id: str
    job_id: str

class MessageBase(BaseModel):
    messageId: str
    message: str
    senderId: str
    receiverId: str
    timestamp: str

postmethod = post.PostMethod()
getmethod = get.GetMethod()

db_dependency = Annotated[Session, Depends(get_db)]

websocket_manager = websocket_manager.WebSocketManager()

@app.post("/postjob/{userid}")
async def post_job(job: JobBase, db: db_dependency):
    print(job)
    response = await postmethod.postJob(job, db)
    return response

@app.post("/post-dummy/")
async def post_job(job_array: List[JobBase], db: db_dependency):
    for job in job_array:
        await postmethod.postJob(job, db)
    return "Finished"

@app.post("/bookmark/{userid}")
async def post_bookmark_job():
    #post jobs to bookmark table.
    postmethod.postBookMark()

@app.get("/home/{userid}")
async def fetchInitialUserData(userid:str, db: db_dependency):
    userid = userid
    response = {
        "my_job": [],
        "public_job": []
    }
    result = await getmethod.initialUserInfoFetch(db)
    print("FIRE!!!!! ",result)

    for job in result:
        print(job)
        if job.user_id == userid:
            response["my_job"].append({
                "user_id": job.user_id,
                "job_id": job.job_id,
                "title": job.title,
                "description": job.description,
                "coordinates": job.coordinates,
                "location": job.location,
                "price": job.price,
                "created_at": job.created_at,
                "is_complete": job.is_complete
            })
        else:
            response["public_job"].append(job)
    return response

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(user_id: str, websocket: WebSocket):
    await websocket_manager.handle_websocket(user_id, websocket)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)


# uvicorn main:app --reload