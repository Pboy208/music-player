const Post = require("../models/post.js");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

require("dotenv").config();



module.exports = {
    addNewPost: tryCatchBlock(null, async (req, res, next) => {
      const post = await Post.addNewPost(req.body.userId,req.body.songUrl,req.body.imageUrl,req.body.lyric,req.body.title
        ,req.body.author,req.body.createdAt,req.body.content);
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
        console.log(result[0][0])
        return res
          .status(status)
          .send({ message});
      })
  };