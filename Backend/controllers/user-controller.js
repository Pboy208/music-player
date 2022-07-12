const User = require("../models/user");
const HttpError = require("../models/http-error");
const { param } = require("../routes/song-router");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

module.exports = {
  getUsers: tryCatchBlock(null, async (req, res, next) => {
    const user = await User.getUsers();
   
    return res
      .status(200)
      .send({ message: "GET_USERS_SUCCESS", data: user });
  }),
  getUserById: async (req, res, next) => {
    const user = await User.getUserById(req.params.userId);
    return res.status(200).send({ message: "GET_USER_ID_SUCCESS", user})
  },
  getProfile: async (req, res, next) => {
    const params = req.params;
    const user = await User.getProfile(req.userData.userId);
    return res.status(200).send({ message: "GET_PROFILE_USER_ID_SUCCESS", data: user[0][0]})
  },
  updateProfile: async (req, res, next) => {
    const body = req.body;
    const user = await User.updateProfile(req.userData.userId,body.avatar,body.bio,body.name);
    return res.status(200).send({ message: "UPDATE_PROFILE_SUCCESS"})
  },
  
  exploreProfileUser: async (req, res, next) => {
    const params = req.params;
    const information = await User.exploreProfileUser(req.userData.userId,params.userId);
    let profile = information[0][0];
    profile.bio = profile.bio === "null" ? "" : profile.bio;
    let postList = information[1];
    postList.forEach((song => {
      song.postId = song.postID;
      song.song = {
        urlMusic : song.urlMusic,
        urlImage : song.urlImage,
        songId : song.songID,
        name : song.songName,
        author : song.author,
        authorId : song.authorId,
        liked: !!song.likedFavourite
      }
      delete song.urlMusic
      delete song.urlImage
      delete song.songID
      delete song.songName
      delete song.author
      delete song.authorId
      delete song.likedFavourite
      delete song.postID
      song.numberOfLike = song.numberOfLike === null ? 0 : song.numberOfLike;
      song.liked = !!song.liked ;
    }));
    return res.status(200).send({ message: "UPDATE_PROFILE_SUCCESS", data :{
      profile,
      postList
    }})
  }

};
