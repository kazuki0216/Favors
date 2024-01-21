from pydantic import BaseModel
from datetime import datetime

# export type myJobs = {
#   name?: string;
#   title: string;
#   description: string;
#   location?: string;
#   coordinates?: string;
#   price?: number;
#   status?: boolean;
# };


class AddJob(BaseModel):
    name: str
    title: str
    description: str
    location: str
    coordinates: str
    price: int
    created_at: datetime
