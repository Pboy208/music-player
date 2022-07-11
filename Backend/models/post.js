const database = require('../util/database');
const tryCatchBlock = require('../util/function').tryCatchBlockForModule;
const HttpError = require('../models/http-error');

module.exports = class Post {
  static addNewPost = tryCatchBlock(
    async (userId, songUrl, imageUrl, lyric, title, author, createdAt, content) => {
      const [resultSet] = await database.execute(
        `CALL Proc_SavePost('${userId}','${songUrl}','${imageUrl}','${lyric}','${title}','${author}','${createdAt}','${content}')`,
      );
      return resultSet;
    },
  );
  static addComment = tryCatchBlock(async (comment, postId, author, createdAt) => {
    const [resultSet] = await database.execute(
      `CALL Proc_SaveComment('${comment}','${postId}','${author}','${createdAt}')`,
    );
    return resultSet;
  });
  static getComment = tryCatchBlock(async (postId) => {
    const [resultSet] = await database.execute(`CALL Proc_GetComment('${postId}')`);
    return resultSet[0];
  });
  static getPosts = tryCatchBlock(async (userId) => {
    const [resultSet] = await database.execute(`CALL Proc_GetPost('${userId}')`);
    return resultSet;
  });
  static togglePostLike = tryCatchBlock(async (userId,postId) => {
    const [resultSet] = await database.execute(`CALL Proc_LikePost('${userId}','${postId}')`);
    return resultSet;
  });
};
