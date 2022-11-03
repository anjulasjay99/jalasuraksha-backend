const Complaint = require("../models/Complaint");

//create new complaint
const createComplaint = async (
  userEmail,
  category,
  fullName,
  telNo,
  province,
  district,
  division,
  gnd,
  description
) => {
  let isSuccess = false;
  let data;
  const complaintId = "CMP" + Date.now(); //creates a unique id for the complaint
  const dateOfComplaint = new Date().toISOString(); //create a timestamp

  //create a new complaint object
  const complaint = new Complaint({
    userEmail,
    complaintId,
    category,
    fullName,
    telNo,
    province,
    district,
    division,
    gnd,
    description,
    status: "Pending",
    dateOfComplaint,
    feedbacks: [
      /*  {
        name: "Angela",
        message: "Will look into this",
        dateOfFeedback: "2022-11-03",
      }, */
    ],
  });

  //add complaint to the database
  await complaint
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

//fetch all complaints made by a user
const getComplaintsByUser = async (userEmail) => {
  let data = [];
  let isSuccess = false;

  //fetch all complaints by user email
  await Complaint.find({ userEmail })
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

module.exports = { createComplaint, getComplaintsByUser };
