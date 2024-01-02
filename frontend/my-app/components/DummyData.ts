import { PostBody, myJobs } from "../types/post";

export const dummyData: PostBody[] = [
  {
    profile: "test",
    name: "Kobe",
    title: "コーヒーのデリバリー",
    description:
      "Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。",
    location: "慶應義塾大学",
    coordinates: "test",
    price: 1900,
    status: false,
  },
  {
    profile: "test",
    name: "alexis",
    title: "経済学Iの出席",
    description:
      "木曜日２限目・鈴木教授の授業で出席のカードを押して、授業後に記入する感想用紙の提出をお願いします。",
    location: "早稲田大学",
    coordinates: "test",
    price: 1000,
    status: false,
  },
  {
    profile: "test",
    name: "moriyama",
    title: "誕生日のサプライズ",
    description:
      "金曜日４限目・８号館でサプライズバースデーを開催するので、それに必要な部品を買ってきてほしいです。",
    location: "一橋大学",
    coordinates: "test",
    price: 2500,
    status: false,
  },
];

export const myDummyData: myJobs[] = [
  {
    name: "kazuki",
    title: "Walk my Dogs",
    description:
      "I have a beautiful pet named Birolo, he is quite a chubby fellow! I would like for someone to take care of him for the entire day.",
    location: "Yokosuka",
    coordinates: "test",
    price: 8000,
    status: false,
  },
  {
    name: "kazuki",
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
    name: "Kenta",
  },
  {
    name: "Jesse",
  },
  {
    name: "Sky",
  },
];
