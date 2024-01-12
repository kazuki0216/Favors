from fastapi import FastAPI, WebSocket

app = FastAPI()
from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json

connected_users = {}
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # can alter with time
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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