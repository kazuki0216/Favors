from pydantic import BaseModel

class Jobs(BaseModel):
    name: str
    userId: str
    title: str
    description: str
    location: str
    coordinates: str
    price: int
    status: bool

class PostMethod: 
    def __init__(self) -> None:
        pass

    async def postJob(self, job: Jobs):
        # Connect to psql, and post job.
        return "post"

    async def postBookMark(self, job: Jobs):
        # Connect to psql, and save Job.
        return "post bookmark job"
    
    # async def save_message():
    #     query = """
    #     INSERT INTO messages (messageId, senderId, timestamp, receiverId, message, isRead) VALUES ('msg_001', 'Kazuki', '2024-01-13 15:00:00', 'Mei', 'Hello this is a test message!', FALSE);
    #     """
    #     await Database.execute(query)
    #     return {"message": "Dummy message inserted successfully"}