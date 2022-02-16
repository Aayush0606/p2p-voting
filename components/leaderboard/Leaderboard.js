import Image from "next/image";
import React from "react";

export default function Leaderboard({ data, idx }) {
  return (
    <>
      <div className="relative p-5">
        <div className="absolute top-[12px] left-[12px] ">
          <span className="inline-flex items-center  justify-center px-2 py-1 text-xl font-bold leading-none text-[#000000] bg-[#3be9b5] rounded-full">
            {idx + 1}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between rounded-lg p-5  items-center border border-pink-400">
          <div>
            <p className="text-xl text-[#afae67]">{data.name}</p>
          </div>
          <div>
            <Image
              layout="intrinsic"
              // src={`/api/imageProxy?url=${encodeURIComponent(data.imageURL)}`}
              src={data.imageURL}
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="text-xl text-[#afae67]">Votes:{data.votes}</p>
          </div>
        </div>
      </div>
    </>
  );
}
