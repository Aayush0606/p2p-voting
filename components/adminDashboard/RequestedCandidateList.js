import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { useRef } from "react";

export default function RequestedCandidateList({ data }) {
  const divRef = useRef(null);

  const approveUser = async () => {
    divRef.current.classList.add("hidden");
    const deleteUserFromRequest = await fetch(
      "http://localhost:3000/api/deleteRequestedUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const addUserInList = await fetch(
      "http://localhost:3000/api/acceptRequestedUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };
  const rejectUser = async () => {
    divRef.current.classList.add("hidden");
    const deleteUser = await fetch(
      "http://localhost:3000/api/deleteRequestedUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <>
      {
        <div
          ref={divRef}
          key={data.id}
          className={`p-5 my-5 shadow-md shadow-cyan-500/50 border rounded-md sm:rounded-full border-pink-300 flex flex-col sm:flex-row w-full justify-between items-center`}
        >
          <div className="sm:ml-5">
            <div>
              <h3 className="text-xl">{data.name}</h3>
            </div>
            <div>
              <a
                className="text-lg"
                href={data.imageURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Image Link
              </a>
            </div>
          </div>
          <div className="flex my-5 sm:my-0">
            <div>
              <CheckIcon
                onClick={(e) => approveUser()}
                className="h-8 text-emerald-900 hover:text-emerald-500  hover:scale-110 hover:z-10 mx-5 cursor-pointer"
              />
            </div>
            <div>
              <XIcon
                onClick={() => rejectUser()}
                className="h-8 text-red-900 hover:scale-110 hover:text-red-500 hover:z-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}
