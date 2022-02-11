import Login from "../../components/Login/Login";

export default function login({ allAdminsList }) {
  return (
    <>
      <Login allAdminsList={allAdminsList} />
    </>
  );
}

export async function getStaticProps(context) {
  let allAdminsList = await fetch("http://localhost:3000/api/allAdminsList");
  allAdminsList = await allAdminsList.json();

  return {
    props: { allAdminsList },
  };
}
