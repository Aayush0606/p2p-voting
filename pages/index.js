import Head from "next/head";
import CandidateList from "../components/CandidateList/CandidateList";

export default function Home() {
  const DUMMY_DATA = [
    {
      name: "John",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is John",
    },
    {
      name: "Cena",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is Cena",
    },
    {
      name: "Under",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is Under",
    },
    {
      name: "Taker",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is Taker",
    },
    {
      name: "Tank",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is Taker",
    },
    {
      name: "DD",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lilyu_-_Crying.svg/1024px-Lilyu_-_Crying.svg.png",
      description: "Hey this is Taker",
    },
  ];

  return (
    <>
      <Head>
        <title>Voting</title>
      </Head>
      <div>
        <CandidateList DUMMY_DATA={DUMMY_DATA} />
      </div>
    </>
  );
}
