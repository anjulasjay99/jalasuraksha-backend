const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userEmail: { type: String, required: true },
  postId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  postCreatedAt: { type: Date, required: true },
  feedbacks: {
    type: [{ name: String, message: String, dateOfFeedback: Date }],
    required: false,
  },
});

const PostSchema = mongoose.model("posts", postSchema);

module.exports = PostSchema;
