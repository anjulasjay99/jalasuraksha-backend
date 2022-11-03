const router = require("express").Router();
const {
  createComplaint,
  getComplaintsByUser,
} = require("../utils/complaintsDBUtil");

//route to create a new complaint
router.route("/").post(async (req, res) => {
  //read request body
  const {
    userEmail,
    category,
    fullName,
    telNo,
    province,
    district,
    division,
    gnd,
    description,
  } = req.body;

  //create a new db record
  const result = await createComplaint(
    userEmail,
    category,
    fullName,
    telNo,
    province,
    district,
    division,
    gnd,
    description
  );

  //send response
  if (result) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

//fetch complaints by user email
router.route("/:userEmail").get(async (req, res) => {
  //read request params
  const userEmail = req.params.userEmail;

  //fetch complaints by user
  const result = await getComplaintsByUser(userEmail);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
