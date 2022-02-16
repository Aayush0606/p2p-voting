import Gun from "gun";
require("gun/lib/then.js");

const db = Gun(["http://localhost:8080/gun"]);

const addRquestedUser = async (data) => {
  if (data) {
    const node = await db.get("requested").get(data.id).put(data);
    return node;
  } else {
    return null;
  }
};

const voteUser = async (data) => {
  //   const updatedData = { ...data, votes: data.votes + 1 };
  const node = await db
    .get("approved")
    .get(data.id)
    .put({ votes: data.votes + 1 });
  return node;
};

const acceptRequestedUser = async (data) => {
  const deleteFromRequested = await db.get("requested").get(data.id).put(null);
  const addInApproved = await db.get("approved").get(data.id).put(data);
  return addInApproved;
};

const rejectRequestedUser = async (data) => {
  const deleteFromRequested = await db.get("requested").get(data.id).put(null);
  return deleteFromRequested;
};

const getAllAproovedUser = async () => {
  const requestedNode = await db.get("approved");
  if (requestedNode) {
    const dummy_data = [];
    const data = await db
      .get("approved")
      .map()
      .once((data, key) => dummy_data.push(data));
    return dummy_data;
  } else {
    return null;
  }
};

const getAllRequestedUsers = async () => {
  const requestedNode = await db.get("requested");
  if (requestedNode) {
    const dummy_data = [];
    const data = await db
      .get("requested")
      .map()
      .once((data, key) => dummy_data.push(data));
    return dummy_data;
  } else {
    return null;
  }
};

export { addRquestedUser, getAllRequestedUsers };
