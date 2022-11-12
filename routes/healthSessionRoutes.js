const router = require("express").Router();
const {
  createSession,
  getSessionsByUser,
  getAllSessions,
} = require("../utils/sessionDBUtil");

//route to create a new session
router.route("/").post(async (req, res) => {
  //read request body
  const {
    userEmail,
    title,
    description,
    platform,
    meetingLink,
    sessionDate,
    time,
    conductors,
  } = req.body;

  //create a new db record
  const result = await createSession(
    userEmail,
    title,
    description,
    platform,
    meetingLink,
    sessionDate,
    time,
    conductors
  );

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

//fetch session by user email
router.route("/:userEmail").get(async (req, res) => {
  //read request params
  const userEmail = req.params.userEmail;

  //fetch session by user
  const result = await getSessionsByUser(userEmail);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

// Route to fetch all session

router.route("/").get(async (req, res) => {
  const result = await getAllSessions();

  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
