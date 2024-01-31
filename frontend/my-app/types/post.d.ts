export type PostBody = {
  profile: string;
  job_id: string;
  name: string;
  title: string;
  description: string;
  location: string;
  coordinates: string;
  price: number;
  bookmarked: boolean;
};

export type myJobs = {
  name?: string;
  jobid: string;
  title: string;
  description: string;
  location?: string;
  coordinates?: string;
  price: number;
  status?: boolean;
};

export type JobBody = {
  user_id: string;
  job_id: string;
  name: string;
  title: string;
  description: string;
  location?: string;
  coordinates?: string;
  price: number;
  created_at: string;
  is_complete: boolean;
};
