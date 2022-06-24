const Song = require("../models/song");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const getImageURLFromID = require("../util/function").getImageURLFromID;
const getMusicURLFromID = require("../util/function").getMusicURLFromID;
require("dotenv").config();

module.exports = {
    getImageBySongID: tryCatchBlock(null, async (req, res, next) => {
      const song = await Song.getImageBySongID(req.params.songId);
      if(song[0]){
        song[0].urlImage = process.env.IMAGE_STORAGE_URL + song[0].id_image_storage;
        delete song[0].id_image_storage;
      }
      return res
        .status(200)
        .send({ message: "GET_IMAGE_URL_SUCCESS", data: song[0] });
    }),
    getMusicBySongID: tryCatchBlock(null, async (req, res, next) => {
        const song = await Song.getMusicBySongID(req.params.songId);
        if(song[0]){
          song[0].urlMusic = process.env.MUSIC_STORAGE_URL + song[0].idMusicStorage;
          delete song[0].id_music_storage;
        }
        return res
          .status(200)
          .send({ message: "GET_MUSIC_URL_SUCCESS", data: {
            songUrl : song[0].urlMusic
          } });
    }),
    getAssetsBySongID: tryCatchBlock(null, async (req, res, next) => {
      const song = await Song.getAssetsBySongID(req.params.songId);
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
      const songList = await Song.getTop100();
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
    addNewSong: tryCatchBlock(null, async (req, res, next) => {
      const body = req.body;
      const song = await Song.addNewSong(body.songUrl,body.imageUrl,body.lyric,body.title,body.author,body.createdAt);
      return res.status(200).send({message: "ADD_NEW_SONG_SUCCESS",data:{
        songId: song[0][0].songId
      }})
    }),
    deleteSong: tryCatchBlock(null, async (req, res, next) => {
      const params = req.params;
      const song = await Song.deleteSong(params.songId);
      return res.status(200).send({message: "DELETE_SONG_SUCCESS",data:{
        songName: song[0][0].songName
      }})
    }),
    getFavoriteSong: tryCatchBlock(null, async (req, res, next) => {
      const params = req.params;
      const result = await Song.getFavoriteSong(req.userData.userId);
      return res.status(200).send({message: "GET_FAVORITE_SONG_SUCCESS",data:{
        songList: result[0]
      }})
    }),
    addFavoriteSong: tryCatchBlock(null, async (req, res, next) => {
      const body = req.body;
      const result = await Song.addFavoriteSong(req.userData.userId,body.songId);
      let status = 200;
      let message = "SAVE_FAVORITE_SONG_SUCCESS"
      if(result[0][0].result === 0){
        status= 404;
        message = "SAVE_FAVORITE_SONG_FAIL";
      }
      return res.status(status).send({message})
    }),
    getNewSong: tryCatchBlock(null, async (req, res, next) => {
      const result = await Song.getNewSong();
      return res.status(200).send({message: "GET_FAVORITE_SONG_SUCCESS",data: result[0]})
    }),
    search: tryCatchBlock(null, async (req, res, next) => {
      const body = req.body;
      const result = await Song.search(body.query,body.scrollOffset);
      return res.status(200).send({message: "SEARCH_SONG_SUCCESS",data: result[0]})
    })
  };