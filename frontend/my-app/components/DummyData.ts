import { PostBody, myJobs } from "../types/post";
import { MessageType } from "../types/message";

export const dummyData: PostBody[] = [
  {
    profile: "test",
    name: "鈴木里佳",
    title: "コーヒーのデリバリー",
    description:
      "Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。これから始まるあなたの物語。カフェドクリエでは本当に最高な人たちと出会うことができた。",
    location: "慶應義塾大学",
    coordinates: "test",
    price: 1900,
    status: false,
    bookmarked: false,
  },
  {
    profile: "test",
    name: "尾形結衣奈",
    title: "経済学Iの出席",
    description:
      "木曜日２限目・鈴木教授の授業で出席のカードを押して、授業後に記入する感想用紙の提出をお願いします。",
    location: "早稲田大学",
    coordinates: "test",
    price: 1000,
    status: false,
    bookmarked: false,
  },
  {
    profile: "test",
    name: "藤若千晴",
    title: "誕生日のサプライズ",
    description:
      "金曜日４限目・８号館でサプライズバースデーを開催するので、それに必要な部品を買ってきてほしいです。",
    location: "一橋大学",
    coordinates: "test",
    price: 2500,
    status: false,
    bookmarked: false,
  },
];

export const myDummyData: myJobs[] = [
  {
    name: "かずき",
    title: "Walk my Dogs",
    description:
      "I have a beautiful pet named Birolo, he is quite a chubby fellow! I would like for someone to take care of him for the entire day.",
    location: "Yokosuka",
    coordinates: "test",
    price: 8000,
    status: false,
  },
  {
    name: "かずき",
    title: "Buy me Medicine",
    description:
      "I have a cold, and I need for someone to go the pharmacy to grab me some medicine called 'Nyquil'. The color of those tablets are blue. Will mail you details if you take the job.",
    location: "Hemi",
    coordinates: "test",
    price: 1000,
    status: false,
  },
];

export const contactList: { name: string }[] = [
  {
    name: "emily",
  },
  {
    name: "Blake",
  },
  {
    name: "Aron",
  },
  {
    name: "Samantha",
  },
  {
    name: "Jessica",
  },
  {
    name: "Mei",
  },
  {
    name: "Kazuki",
  },
  {
    name: "Jesse",
  },
  {
    name: "Sky",
  },
];

export const dummyMessage: MessageType[] = [
  {
    messageId: "1",
    senderId: "mei",
    timestamp: "22:04",
    receiverId: "Kazuki",
    message: "Hello there!",
    isRead: false,
  },
  {
    messageId: "2",
    senderId: "Kazuki",
    timestamp: "22:34",
    receiverId: "Yahoo",
    message: "Hello, this is the first message",
    isRead: false,
  },
];
