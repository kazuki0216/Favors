import { PostBody } from "../types/post";

const dummyData: PostBody[] = [
  {
    profile: "test",
    name: "Kobe",
    title: "コーヒーのデリバリー",
    description:
      "Starbucks元町・中華街店舗でアイスのホワイトモカVentiサイズのピックアップをお願いいたします。",
    location: "慶應義塾大学",
    coordinates: "test",
    price: 1900,
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
  },
];

export default dummyData;
