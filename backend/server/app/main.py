from fastapi import FastAPI, WebSocket
from databases import Database
from typing import List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import json
from contextlib import asynccontextmanager
import psycopg2

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



connected_users = {}

@app.post("/dummy_message")
async def root():
    query = """
    INSERT INTO messages (messageId, senderId, timestamp, receiverId, message, isRead) VALUES ('msg_001', 'Kazuki', '2024-01-13 15:00:00', 'Mei', 'Hello this is a test message!', FALSE);
    """
    await database.execute(query)
    return {"message": "Dummy message inserted successfully"}

@app.get("/dummy_data")
async def get_dummy():
    query = "SELECT * FROM messages WHERE senderId = Kazuki"
    return await database.fetch_all(query)

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(user_id: str, websocket: WebSocket):
    await websocket.accept()

    # Store the WebSocket connection in the dictionary
    connected_users[user_id] = websocket

    try:
        while True:
            sender_data = None
            data = await websocket.receive_text()
            print(data)
            data_dict = None
            if data:
                data_dict = json.loads(data)
                data_dict["senderId"] = user_id

            # Convert sender_data to a JSON string before sending
            json_data = json.dumps(data_dict)
            # Send the received data to the other user
            for user, user_ws in connected_users.items():
                if user != user_id:
                    await user_ws.send_text(json_data)
    except WebSocketDisconnect:
        del connected_users[user_id]
        await websocket.close()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)


# uvicorn main:app --reload