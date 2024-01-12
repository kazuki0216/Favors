export type AppContext = {
  userid: string;
  username: string;
};

export type MessageType = {
  messageId: string;
  senderId: string;
  timestamp: string;
  receiverId: string;
  message: string;
  isRead?: boolean;
};
