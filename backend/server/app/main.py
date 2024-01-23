from fastapi import FastAPI, WebSocket
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import json
from contextlib import asynccontextmanager
# import psycopg2
from crud import post
from api import websocket_manager

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # can alter with time
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
websocket_manager = websocket_manager.WebSocketManager()

@app.post("/dummy_message")
async def root():
    post.save_message()

@app.post("/postjob/:userid")
async def post_job():
    post.postJob()

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