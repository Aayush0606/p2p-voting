import Head from "next/head";
import { useState } from "react";
import CandidateList from "../components/CandidateList/CandidateList";
import Toast from "../components/Toast/Toast";

export async function getStaticProps(context) {
  let DUMMY_DATA = await fetch("http://localhost:3000/api/getAllUsers");
  DUMMY_DATA = await DUMMY_DATA.json();

  return {
    props: { DUMMY_DATA },
  };
}

export default function Home({ DUMMY_DATA }) {
  const [showToast, setShowToast] = useState(false);
  return (
    <>
      <Head>
        <title>Voting</title>
      </Head>
      <div className="absolute w-full z-0">
        <div>
          <CandidateList setShowToast={setShowToast} DUMMY_DATA={DUMMY_DATA} />
        </div>

        {showToast && (
          <div className="fixed bottom-0 w-full   z-10">
            <Toast setShowToast={setShowToast} />
          </div>
        )}
      </div>
    </>
  );
}
