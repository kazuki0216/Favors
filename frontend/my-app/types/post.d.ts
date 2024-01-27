export type PostBody = {
  profile: string;
  userId: string;
  name: string;
  title: string;
  description: string;
  location: string;
  coordinates: string;
  price: number;
  status: boolean;
  bookmarked: boolean;
};

export type myJobs = {
  name?: string;
  userId: string;
  title: string;
  description: string;
  location?: string;
  coordinates?: string;
  price?: number;
  status?: boolean;
};
