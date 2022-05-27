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
  }

};
