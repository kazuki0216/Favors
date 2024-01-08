export type AppContext = {
  userid: string;
  username: string;
};

export type Message = {
  messageId: string, 
  senderId: string, 
  timestamp: Date,
  receiverId: string, 
  content: string
}