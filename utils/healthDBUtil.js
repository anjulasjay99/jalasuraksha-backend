const Post = require("../models/Health");

//create new health post
const createPost = async (userEmail, title, content) => {
  let isSuccess = false;
  let data;
  const postId = "w" + Date.now(); //creates a unique id for the complaint
  const postCreatedAt = new Date().toISOString(); //create a timestamp

  //create a new post object
  const post = new Post({
    userEmail,
    postId,
    title,
    content,
    postCreatedAt,
    feedbacks: [
      /*  {
        name: "Angela",
        message: "Will look into this",
        dateOfFeedback: "2022-11-03",
      }, */
    ],
  });

  //add post to the database
  await post
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

//fetch all posts made by a user
const getPostsByUser = async (userEmail) => {
  let data = [];
  let isSuccess = false;

  //fetch all posts by user email
  await Post.find({ userEmail })
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

const getAllPosts = async () => {
  let data = [];
  let isSuccess = false;

  await Post.find()
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

module.exports = { createPost, getPostsByUser, getAllPosts };
//reply to post/ feedback
const replyToPost = async (postId, name, message) => {
  let feedbacks = [];
  let isSuccess = false;
  let data;

  //fetch by post id
  await Post.find({ postId })
    .then((res) => {
      feedbacks = res[0].feedbacks;
    })
    .catch((error) => {
      console.error(error);
    });

  const reply = {
    name,
    message,
    dateOfFeedback: new Date().toISOString(),
  };

  feedbacks.push(reply);

  await Post.findOneAndUpdate({ postId }, { feedbacks })
    .then((res) => {
      isSuccess = true;
      data = res;
    })
    .catch((error) => {
      console.log(error);
      isSuccess = false;
    });

  return isSuccess ? data : false;
};

//fetch all feedbacks by post id
const getFeedbacks = async (postId) => {
  let isSuccess = false;
  let data = [];

  await Post.find({ postId })
    .then((res) => {
      isSuccess = true;
      data = res[0].feedbacks;
    })
    .catch((error) => {
      console.log(error);
      isSuccess = false;
    });

  return isSuccess ? data : false;
};

module.exports = {
  createPost,
  getPostsByUser,
  getAllPosts,
  replyToPost,
  getFeedbacks,
};
