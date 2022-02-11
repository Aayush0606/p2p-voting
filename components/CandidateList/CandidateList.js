import Image from "next/image";
export default function CandidateList({ DUMMY_DATA, setShowToast }) {
  const voteHandler = async (data) => {
    setShowToast(true);
    const updateVote = await fetch("http://localhost:3000/api/voteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="p-5 my-2 sm:grid sm:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {DUMMY_DATA &&
        DUMMY_DATA.map((data) => {
          return (
            <div
              onClick={() => voteHandler(data)}
              key={data.name}
              className="3xl:w-128 p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 sm:hover:z-50"
            >
              <Image
                layout="responsive"
                src={`/api/imageProxy?url=${encodeURIComponent(data.imageURL)}`}
                height={1080}
                width={1920}
              />
              <div>
                <p className="p-5 text-3xl text-center text-[#4197b4]">
                  {data.name}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
