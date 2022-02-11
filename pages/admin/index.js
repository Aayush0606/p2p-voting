import AddAdminForm from "../../components/adminDashboard/AddAdminForm";
import AllAdminsList from "../../components/adminDashboard/AllAdminsList";
import RequestedCandidateList from "../../components/adminDashboard/RequestedCandidateList";
export default function index({ requestedUserData, allAdminsList }) {
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
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let requestedUserData = await fetch(
    "http://localhost:3000/api/requestedUsersList"
  );
  requestedUserData = await requestedUserData.json();
  let allAdminsList = await fetch("http://localhost:3000/api/allAdminsList");
  allAdminsList = await allAdminsList.json();

  return {
    props: { requestedUserData, allAdminsList },
  };
}
