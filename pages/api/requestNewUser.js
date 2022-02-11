export default async (req, res) => {
  const postReq = await fetch("http://localhost:8001/requested", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });
  res.status(200).send("Success");
};
