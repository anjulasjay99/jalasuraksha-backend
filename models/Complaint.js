const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  userEmail: { type: String, required: true },
  complaintId: { type: String, required: true },
  category: { type: String, required: true },
  fullName: { type: String, required: true },
  telNo: { type: Number, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  division: { type: String, required: true },
  gnd: { type: String, required: true },
  description: { type: String, required: true },
  dateOfComplaint: { type: Date, required: true },
  status: { type: String, required: true },
  feedbacks: {
    type: [{ name: String, message: String, dateOfFeedback: Date }],
    required: false,
  },
});

const ComplaintSchema = mongoose.model("complaints", complaintSchema);

module.exports = ComplaintSchema;
