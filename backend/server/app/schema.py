from pydantic import BaseModel

class postMessage(BaseModel):
    messageId: str
    message: str
    senderId: str
    receiverId: str 
    timestamp: str