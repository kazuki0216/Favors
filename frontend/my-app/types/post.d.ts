export type PostBody = {
  profile: string;
  name: string;
  title: string;
  description: string;
  location: string;
  coordinates: string;
  price: number;
  status: boolean;
};

export type myJobs = {
  name?: string;
  title: string;
  description: string;
  location?: string;
  coordinates?: string;
  price?: number;
  status?: boolean;
};
