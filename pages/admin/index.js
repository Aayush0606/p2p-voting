import Link from "next/link";
import Image from "next/image";
import AddAdminForm from "../../components/adminDashboard/AddAdminForm";
import AllAdminsList from "../../components/adminDashboard/AllAdminsList";
import RequestedCandidateList from "../../components/adminDashboard/RequestedCandidateList";
import { useRouter } from "next/router";
import { getAllRequestedUsers } from "../../server/allRequestsHandler";
export default function index({ requestedUserData, someData }) {
  console.log(someData);
  let loggedIn;
  if (typeof window !== "undefined") {
    loggedIn = window.localStorage.getItem("login");
  }

  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("login");
      router.push("/");
    }
  };

  // {Add New Admin Code}  :-
  // <div className="mb-10">
  //         <h1 className="text-center text-3xl text-pink-400 ">
  //           All admins list
  //         </h1>
  //         <div>
  //           <AddAdminForm />
  //         </div>
  //         <div>
  //           {allAdminsList &&
  //             allAdminsList.map((data) => <AllAdminsList data={data} />)}
  //         </div>
  //       </div>

  return (
    <>
      {loggedIn ? (
        <div className="p-5">
          <div>
            <h1 className="text-center text-3xl text-pink-400">
              New candidate request
            </h1>
            {requestedUserData &&
              requestedUserData.map((data) => (
                <RequestedCandidateList data={data} />
              ))}
          </div>
          <div className="my-5">
            <button
              onClick={handleLogout}
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-16 w-full">
          <Image layout="intrinsic" src="/angry.svg" height={300} width={300} />

          <Link href="/admin/login">
            <a className="text-red-900 text-4xl">Login First </a>
          </Link>
        </div>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const requestedUserData = await fetch(
    "http://localhost:3000/api/requestedUsersList"
  ).then((data) => data.json());
  // const allAdminsList = await fetch(
  //   "http://localhost:3000/api/allAdminsList"
  // ).then((data) => data.json());
  const someData = await getAllRequestedUsers();

  return {
    props: { requestedUserData, someData },
  };
}
