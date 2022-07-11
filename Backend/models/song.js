const database = require('../util/database');
const tryCatchBlock = require('../util/function').tryCatchBlockForModule;
const HttpError = require('../models/http-error');

module.exports = class Song {
  static getImageBySongID = tryCatchBlock(async (id) => {
    const [resultSet] = await database.execute(`SELECT urlImage from Song where songID = '${id}'`);
    return resultSet;
  });
  static getMusicBySongID = tryCatchBlock(async (id) => {
    const [resultSet] = await database.execute(`SELECT urlMusic from Song where songID = '${id}'`);
    return resultSet;
  });
  static getAssetsBySongID = tryCatchBlock(async (userId,songId) => {
    const [resultSet] = await database.execute(
      `CALL Proc_GetAssets('${songId}','${userId}')`,
    );
    return resultSet;
  });
  static getTop100 = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`CALL Proc_Get_Top100Song()`);
    return resultSet;
  });
  static addNewSong = tryCatchBlock(async (userId,songUrl, imageUrl, lyric, title, author, createdAt) => {
    const [resultSet] = await database.execute(
      `CALL Proc_SaveSong('${userId}','${songUrl}','${imageUrl}','${lyric}','${title}','${author}','${createdAt}')`,
    );
    return resultSet;
  });
  static deleteSong = tryCatchBlock(async (songId) => {
    const [resultSet] = await database.execute(`CALL Proc_DeleteSong('${songId}')`);
    return resultSet;
  });
  static getFavoriteSong = tryCatchBlock(async (userId) => {
    // console.log(userId);
    const [resultSet] = await database.execute(`CALL Proc_GetFavoriteSong('${userId}')`);
    return resultSet;
  });
  static addFavoriteSong = tryCatchBlock(async (userId, songId) => {
    const [resultSet] = await database.execute(
      `CALL Proc_SaveFavoriteSong('${userId}','${songId}')`,
    );
    return resultSet;
  });
  static getNewSong = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`CALL Proc_GetNewSongs()`);
    return resultSet;
  });
  static search = tryCatchBlock(async (query, scrollOffset) => {
    const [resultSet] = await database.execute(
      `CALL Proc_SearchSongScroll('${query}',${scrollOffset})`,
    );
    return resultSet;
  });
  static exploreArtist = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`CALL Proc_GetArtistSong()`);
    return resultSet;
  });
  static toggleLikeSong = tryCatchBlock(async (userId, songId) => {
    const [resultSet] = await database.execute(`CALL Proc_ToggleLikeSong('${userId}','${songId}')`);
    return resultSet;
  });
  static getLyrics = tryCatchBlock(async (songId) => {
    const [resultSet] = await database.execute(`CALL Pro_GetLyrics('${songId}')`);
    return resultSet;
  });
  static increaseTimesPlay = tryCatchBlock(async (songId) => {
    const [resultSet] = await database.execute(`CALL Pro_IncreaseTimePlay('${songId}')`);
    return resultSet;
  });
};
