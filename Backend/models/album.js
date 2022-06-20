const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");


module.exports = class Album{
    static getNewAlbum = tryCatchBlock(async ()=>{
        const [resultSet] = await database.execute(`CALL Proc_GetNewAlbums()`);
        return resultSet;
    })
}