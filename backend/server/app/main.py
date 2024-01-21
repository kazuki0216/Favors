from fastapi import FastAPI, WebSocket
from database import Database
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import json
from contextlib import asynccontextmanager
# import psycopg2
from backend.server.app.crud.post import PostMethod
from backend.server.app.api.websocket_manager import WebSocketManager

# Database URL: postgresql://<username>:<password>@<host>:<port>/<database_name>
# DATABASE_URL = "postgresql://postgres:Kazuki123@localhost:5432/FavorsDB"
# database = Database(DATABASE_URL)
# USE_LIFESPAN = True

# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     # This will run when the app opens
#     await database.connect()
#     yield
#     # This will run after the app is closed
#     await database.disconnect()

# app = FastAPI(lifespan=lifespan)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # can alter with time
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
websocket_manager = WebSocketManager()

@app.post("/dummy_message")
async def root():
    PostMethod.save_message()

@app.post("/postjob/:userid")
async def post_job():
    PostMethod.postJob()

# @app.get("/dummy_data")
# async def get_dummy():
#     query = "SELECT * FROM messages WHERE senderId = Kazuki"
#     return await Database.fetch_all(query)

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(user_id: str, websocket: WebSocket):
    await websocket_manager.handle_websocket(user_id, websocket)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)


# uvicorn main:app --reload