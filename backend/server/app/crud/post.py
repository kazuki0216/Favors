import models
class PostMethod: 
    def __init__(self) -> None:
        pass

    async def postJob(self, job, db):
        print("This is the job object ",job)
        db_jobs = models.Jobs(user_id=job.user_id, job_id=job.job_id, title=job.title, description=job.description, location=job.location, coordinates=job.coordinates, price=job.price, created_at=job.created_at, is_complete=job.is_complete )
        db.add(db_jobs)
        db.commit()

    async def postBookMark(self, job, db):
        db_jobs = models.Jobs(user_id=job.user_id, title=job.title, description=job.description, location=job.location, coordinates=job.coordinates, price=job.price, created_at=job.created_at )
        db.add(db_jobs)
        db.commit()
    
    # async def save_message():
    #     query = """
    #     INSERT INTO messages (messageId, senderId, timestamp, receiverId, message, isRead) VALUES ('msg_001', 'Kazuki', '2024-01-13 15:00:00', 'Mei', 'Hello this is a test message!', FALSE);
    #     """
    #     await Database.execute(query)
    #     return {"message": "Dummy message inserted successfully"}