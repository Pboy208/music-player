const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");
const md5 = require("md5");
module.exports = class User {
  constructor(userData) {
    this.email = userData.email;
    this.password = userData.password? md5(userData.password) : "";
    this.name = userData.name;
    this.userID = userData.userID;
    // this.address = userData.address;
    // this.avatar = userData.avatar;
  }
  static getUsers = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`SELECT * from User`);
    return resultSet;
  });

  static getUserById = tryCatchBlock(async (id) => {
    const [resultSet] = await database.execute(`SELECT * from User where user_id = '${id}'`);
    return resultSet;
  })
};
