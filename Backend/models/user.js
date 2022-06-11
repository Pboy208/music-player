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
    this.phoneNumber = userData.phoneNumber;
    // this.address = userData.address;
    // this.avatar = userData.avatar;
  }
  static getUsers = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`SELECT * from User`);
    return resultSet;
  });
  static getUserByEmail = tryCatchBlock(async (email,avatar,username) =>{
    const [resultSet] = await database.execute(`Call Proc_User_FindOneOrCreate('${email}','${avatar}','${username}')`);
    return resultSet.length === 0
      ? null
      : { userID: resultSet[0][0].userID, avatar: resultSet[0][0].avatar, name: resultSet[0][0].name};
  })
  static getUserById = tryCatchBlock(async (id) => {
    const [resultSet] = await database.execute(`SELECT * from User where userID = '${id}'`);
    return resultSet;
  })
  static getProfile = tryCatchBlock(async (id) => {
    const [resultSet] = await database.execute(`CALL Proc_GetProfileUser('${id}')`);
    return resultSet;
  })
  static updateProfile = tryCatchBlock(async (userId,avatar,name,phoneNumber) => {
    const [resultSet] = await database.execute(`CALL Proc_UpdateUserProfile('${userId}','${avatar}','${name}','${phoneNumber}')`);
    return resultSet;
  })
  static isEmailExist = tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
    return resultSet.length === 0 ? false : true;
  });
  signIn = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(
      `SELECT * FROM User WHERE email LIKE '${this.email}' AND password LIKE '${this.password}'`
    );
    return resultSet.length === 0
      ? null
      : { userID: resultSet[0].userID, avatar: resultSet[0].avatar, name: resultSet[0].name};
  });

  signUp = tryCatchBlock(async () => {
    await database.execute(
      `INSERT INTO User(userID,email,password,name,createdDate,phoneNumber,isVip) 
      VALUES(uuid(),'${this.email}','${this.password}','${this.name}',CURRENT_TIMESTAMP(),'${this.phoneNumber}',0)`
    );
  });

};
