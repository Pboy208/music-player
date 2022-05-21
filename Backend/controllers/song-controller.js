const Song = require("../models/song");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const getImageURLFromID = require("../util/function").getImageURLFromID;
const getMusicURLFromID = require("../util/function").getMusicURLFromID;
require("dotenv").config();

module.exports = {
    getImageBySongID: tryCatchBlock(null, async (req, res, next) => {
      const song = await Song.getImageBySongID(req.query.songId);
      if(song[0]){
        song[0].urlImage = process.env.IMAGE_STORAGE_URL + song[0].id_image_storage;
        delete song[0].id_image_storage;
      }
      return res
        .status(200)
        .send({ message: "GET_IMAGE_URL_SUCCESS", data: song[0] });
    }),
    getMusicBySongID: tryCatchBlock(null, async (req, res, next) => {
        const song = await Song.getMusicBySongID(req.query.songId);
        if(song[0]){
          song[0].urlMusic = process.env.MUSIC_STORAGE_URL + song[0].id_music_storage;
          delete song[0].id_music_storage;
        }
        return res
          .status(200)
          .send({ message: "GET_MUSIC_URL_SUCCESS", data: song[0] });
    }),
    getAssetsBySongID: tryCatchBlock(null, async (req, res, next) => {
      const song = await Song.getAssetsBySongID(req.query.songId);
      if(song[0]){
        song[0].urlMusic = process.env.MUSIC_STORAGE_URL + song[0].id_music_storage;
        song[0].urlImage = process.env.IMAGE_STORAGE_URL + song[0].id_image_storage;
        delete song[0].id_music_storage;
        delete song[0].id_image_storage;
      }
      return res
        .status(200)
        .send({ message: "GET_ASSETS_URL_SUCCESS", data: song[0] });
    }),
    getTop100: tryCatchBlock(null, async (req, res, next) => {
      const songList = await Song.getTop100(req.query.categoryType);
      if(songList){
        songList[0].forEach(song =>{
          song.urlImage = getImageURLFromID('66f5692b-4709-2091-4dc1-f32a102323e6');
          song.urlMusic = getMusicURLFromID('6fb6c197-6413-7508-38c7-21b180c0988f');
          delete song.id_image_storage;
          delete song.id_music_storage;
        })
      }
      return res
        .status(200)
        .send({ message: "GET_TOP_100_SUCCESS", data: songList[0] });
  }),
  };