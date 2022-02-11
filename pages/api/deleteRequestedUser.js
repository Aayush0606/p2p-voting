export default async (req, res) => {
  const postReq = await fetch(
    `http://localhost:8001/requested/${req.body.id}`,
    {
      method: "DELETE",
    }
  );
  res.status(200).send("Success");
};
