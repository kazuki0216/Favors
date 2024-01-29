from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime
import models

class User(Base):
    __tablename__ = "user"
    user_id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    

class Jobs(Base):
    __tablename__ = "jobs"
    user_id = Column(String, primary_key=True)
    job_id = Column(String, nullable=False, unique=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    location = Column(String, nullable=False)
    coordinates = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    created_at = Column(String, nullable=False)

class BookMark(Base):
    __tablename__ = "bookmark"
    id = Column(Integer, primary_key=True)
    job_id = Column(String, ForeignKey("jobs.job_id"))
    user_id = Column(String)
    job = relationship("Jobs")

class MessageBase(Base):
    __tablename__="messages"
    id = Column(Integer,primary_key=True,nullable=False)
    messageId = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    senderId = Column(String, nullable=False)
    receiverId = Column(String, nullable=False)
    timestamp = Column(String, nullable=False)
