export default async (req, res) => {
  const data = await fetch("http://localhost:8001/requested");
  const DUMMY_DATA = await data.json();
  res.json(DUMMY_DATA);
};
