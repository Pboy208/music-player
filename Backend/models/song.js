const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");


module.exports = class Song{
    static getImageBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT id_image_storage from Song where song_id = '${id}'`);
        return resultSet;
    });
    static getMusicBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT id_music_storage from Song where song_id = '${id}'`);
        return resultSet;
    });
    static getAssetsBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT id_image_storage,id_music_storage from Song where song_id = '${id}'`);
        return resultSet;
    });
    static getTop100 = tryCatchBlock(async (type) => {
        const [resultSet] = await database.execute(`CALL Proc_Get_Top100Song(${type})`);
        return resultSet;
    });
}