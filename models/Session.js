const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  userEmail: { type: String, required: true },
  sessionId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  sessionCreatedAt: { type: Date, required: true },
  platform: { type: String, required: true },
  meetingLink: { type: String, required: true },
  sessionDate: { type: Date, required: true },
  time: { type: String, required: true },
  conductors: { type: Date, required: true },
});

const SessionSchema = mongoose.model("sessions", sessionSchema);

module.exports = SessionSchema;
