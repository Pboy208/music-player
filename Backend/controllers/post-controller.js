const Post = require("../models/post.js");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

require("dotenv").config();



module.exports = {
  addNewPost: tryCatchBlock(null, async (req, res, next) => {
    const post = await Post.addNewPost(
      req.userData.userId,
      req.body.urlMusic,
      req.body.urlImage,
      req.body.lyric,
      req.body.title,
      req.userData.userId,
      new Date(),
      req.body.content,
    );
    return res.status(200).send({ message: 'SAVE_POST_SUCCESS', data: post[0][0] });
  }),
  addComment: tryCatchBlock(null, async (req, res, next) => {
    const body = req.body;
    const result = await Post.addComment(
      body.comment,
      body.postId,
      req.userData.userId,
      new Date(),
    );
    let status = 200;
    let message = 'SAVE_COMMENT_SUCCESS';
    if (result[0][0].result != true) {
      status = 404;
      message = 'SAVE_COMMENT_FAIL';
    }
    return res.status(status).send({ message });
  }),
  getComment: tryCatchBlock(null, async (req, res, next) => {
    const commentList = await Post.getComment(req.params.postId);
    return res.status(200).send({ message: 'SAVE_COMMENT_SUCCESS', data: commentList });
  }),
  getPosts: tryCatchBlock(null, async (req, res, next) => {
    const params = req.params;
    const result = await Post.getPosts(params.userId);
    let status = 200;
    let message = 'GET_POSTS_SUCCESS';
    return res.status(status).send({ message, data: result[0] });
  }),
  toggleLikePost: tryCatchBlock(null, async (req, res, next) => {
    await Post.togglePostLike(req.userData.userId,req.params.postId);
    let status = 200;
    let message = 'Toggle_POST_LIKE_SUCCESS';
    return res.status(status).send({ message });
  }),
};
