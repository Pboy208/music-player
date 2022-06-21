const User = require("../models/user");
const HttpError = require("../models/http-error");
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
    const user = await User.getProfile(params.userId);
    return res.status(200).send({ message: "GET_PROFILE_USER_ID_SUCCESS", data: user[0][0]})
  },
  updateProfile: async (req, res, next) => {
    const body = req.body;
    const user = await User.updateProfile(req.userData.userId,body.avatar,body.bio);
    return res.status(200).send({ message: "UPDATE_PROFILE_SUCCESS"})
  }

};
