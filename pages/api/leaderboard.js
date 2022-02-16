export default async (req, res) => {
  let learderboard = await fetch(
    "http://localhost:8001/profiles?_sort=votes&_order=desc"
  );
  learderboard = await learderboard.json();
  res.json(learderboard);
};
