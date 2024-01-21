import json
from fastapi import WebSocket, WebSocketDisconnect

class WebSocketManager: 
    def __init__(self) -> None:
        self.connected_user = {}

    async def connect(self, user_id: str, websocket: WebSocket):
        await websocket.accept()
        self.connected_user[user_id] = websocket

    async def disconnect(self, user_id: str):
        del self.connected_user[user_id]

    async def broadcast_message(self, sender_id: str, message: str):
        data_dict = {"senderId": sender_id, "message": message}
        json_data = json.dumps(data_dict)

        for user, user_ws in self.connected_user.items():
            if user != sender_id: 
                await user_ws.send_text(json_data)

    async def handle_websocket(self, user_id: str, websocket: WebSocket):
        await self.connected(user_id, websocket)

        try: 
            while True: 
                data = await websocket.receive_text()
                if data: 
                    await self.broadcast_message(user_id, data)
        except WebSocketDisconnect:
            await self.disconnect(user_id)
            await websocket.close()