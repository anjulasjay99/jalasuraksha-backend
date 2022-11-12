const Session = require("../models/Session");

//create new health session
const createSession = async (
  userEmail,
  title,
  description,
  platform,
  meetingLink,
  sessionDate,
  time,
  conductors
) => {
  let isSuccess = false;
  let data;
  const sessionId = "s" + Date.now(); //creates a unique id for the session
  const sessionCreatedAt = new Date().toISOString(); //create a timestamp

  //create a new session
  const session = new Session({
    userEmail,
    sessionId,
    title,
    description,
    sessionCreatedAt,
    platform,
    meetingLink,
    sessionDate,
    time,
    conductors,
  });

  //add session to the database
  await session
    .save()
    .then((res) => {
      console.log(res);
      isSuccess = true;
      data = res;
    })
    .catch((error) => {
      console.error(error);
      isSuccess = false;
    });

  return isSuccess ? data : false;
};

//fetch all session made by a user
const getSessionsByUser = async (userEmail) => {
  let data = [];
  let isSuccess = false;

  //fetch all session by user email
  await Session.find({ userEmail })
    .then((res) => {
      data = res;
      isSuccess = true;
    })
    .catch((error) => {
      console.error(error);
      isSuccess = false;
    });

  if (isSuccess) {
    return data;
  } else {
    return false;
  }
};

const getAllSessions = async () => {
  let data = [];
  let isSuccess = false;

  await Session.find()
    .then((res) => {
      data = res;
      isSuccess = true;
    })
    .catch((err) => {
      console.log(err);
      isSuccess = false;
    });

  if (isSuccess) {
    return data;
  } else {
    return false;
  }
};

module.exports = {
  createSession,
  getSessionsByUser,
  getAllSessions,
};
