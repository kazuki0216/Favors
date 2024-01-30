import models
class GetMethod: 
    def __init__(self) -> None:
        pass

    async def initialUserInfoFetch(self, userId, db):
        return db.query(models.Jobs).filter(models.Jobs.is_complete == False).all()

    #     query = """
    #     INSERT INTO messages (messageId, senderId, timestamp, receiverId, message, isRead) VALUES ('msg_001', 'Kazuki', '2024-01-13 15:00:00', 'Mei', 'Hello this is a test message!', FALSE);
    #     """
    #     await Database.execute(query)
    #     return {"message": "Dummy message inserted successfully"}