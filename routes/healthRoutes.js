const router = require("express").Router();
const {
  createPost,
  getPostsByUser,
  getAllPosts,
  replyToPost,
  getFeedbacks,
} = require("../utils/healthDBUtil");

//route to create a new post
router.route("/").post(async (req, res) => {
  //read request body
  const { userEmail, title, content } = req.body;

  //create a new db record
  const result = await createPost(userEmail, title, content);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

//fetch posts by user email
router.route("/:userEmail").get(async (req, res) => {
  //read request params
  const userEmail = req.params.userEmail;

  //fetch posts by user
  const result = await getPostsByUser(userEmail);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

// Route to fetch all posts

router.route("/").get(async (req, res) => {
  const result = await getAllPosts();

  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});
//reply to post/feedback
router.route("/reply/:postId").post(async (req, res) => {
  const postId = req.params.postId;
  const { name, message } = req.body;
  const result = await replyToPost(postId, name, message);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

//fetch feedbacks
router.route("/feedbacks/:postId").get(async (req, res) => {
  const postId = req.params.postId;
  const result = await getFeedbacks(postId);

  //send response
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
