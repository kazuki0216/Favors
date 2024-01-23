from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, Text


DATABASE_URL = "postgresql://postgres:Kazuki123@localhost:5432/FavorsDB"

engine = create_engine(DATABASE_URL)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class Message(Base):
    __tablename__="messages"
    id = Column(Integer,primary_key=True,nullable=False)
    messageId = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    senderId = Column(String, nullable=False)
    receiverId = Column(String, nullable=False)
    timestamp = Column(String, nullable=False)