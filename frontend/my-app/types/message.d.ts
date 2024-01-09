export type AppContext = {
  userid: string;
  username: string;
};

export type MessageType = {
  messageId: string, 
  senderId: string, 
  timestamp: Date,
  receiverId: string, 
  content: string,
  isRead: boolean
}