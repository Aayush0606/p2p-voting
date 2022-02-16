import Leaderboard from "../../components/leaderboard/Leaderboard";

export default function index({ leaderboard }) {
  return (
    <>
      <div>
        {leaderboard &&
          leaderboard.map((data, idx) => {
            return (
              <div key={data.id}>
                <Leaderboard data={data} idx={idx} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let leaderboard = await fetch("http://localhost:3000/api/leaderboard").then(
    (data) => data.json()
  );
  return {
    props: { leaderboard },
  };
}
