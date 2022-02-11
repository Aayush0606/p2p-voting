export default async function handler(req, res) {
  const data = { ...req.body, votes: req.body.votes + 1 };
  const updateDetails = await fetch(
    `http://localhost:8001/profiles/${req.body.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  res.send("Success");
}
