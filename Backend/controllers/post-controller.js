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
      return res
        .status(200)
        .send({ message: "SAVE_POST_SUCCESS", data: {
            postId : post[0][0].postId
        } });
    }),
    addComment: tryCatchBlock(null, async (req, res, next) => {
        const body = req.body;
        const result = await Post.addComment(body.comment,body.postId,body.author,body.createdAt);
        let status = 200;
        let message = "SAVE_COMMENT_SUCCESS"
        if(result[0][0].result != true){
            status = 404;
            message = "SAVE_COMMENT_FAIL";
        }
        return res
          .status(status)
          .send({ message});
      }),
      getPosts: tryCatchBlock(null, async (req, res, next) => {
        const params = req.params;
        const result = await Post.getPosts(params.userId);
        let status = 200;
        let message = "GET_POSTS_SUCCESS"
        return res
          .status(status)
          .send({ message, data : result[0]});
      }), 
  };