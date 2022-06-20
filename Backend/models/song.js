const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");


module.exports = class Song{
    static getImageBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT idImageStorage from Song where songID = '${id}'`);
        return resultSet;
    });
    static getMusicBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT idMusicStorage from Song where songID = '${id}'`);
        return resultSet;
    });
    static getAssetsBySongID = tryCatchBlock(async (id) => {
        const [resultSet] = await database.execute(`SELECT idImageStorage,idMusicStorage from Song where songID = '${id}'`);
        return resultSet;
    });
    static getTop100 = tryCatchBlock(async () => {
        const [resultSet] = await database.execute(`CALL Proc_Get_Top100Song()`);
        return resultSet;
    });
    static addNewSong = tryCatchBlock(async (songUrl,imageUrl,lyric,title,author,createdAt)=>{
        const [resultSet] = await database.execute(`CALL Proc_SaveSong('${songUrl}','${imageUrl}','${lyric}','${title}','${author}','${createdAt}')`);
        return resultSet;
    })
    static deleteSong = tryCatchBlock(async (songId)=>{
        const [resultSet] = await database.execute(`CALL Proc_DeleteSong('${songId}')`);
        return resultSet;
    })
    static getFavoriteSong = tryCatchBlock(async (userId)=>{
        const [resultSet] = await database.execute(`CALL Proc_GetFavoriteSong('${userId}')`);
        return resultSet;
    })
    static addFavoriteSong = tryCatchBlock(async (userId,songId)=>{
        const [resultSet] = await database.execute(`CALL Proc_SaveFavoriteSong('${userId}','${songId}')`);
        return resultSet;
    })
    static getNewSong = tryCatchBlock(async ()=>{
        const [resultSet] = await database.execute(`CALL Proc_GetNewSongs()`);
        return resultSet;
    })
}