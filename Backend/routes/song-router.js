const express = require("express");
const router = express.Router();
const songController = require("../controllers/song-controller.js");


router.get('/GetImage',songController.getImageBySongID);
router.get('/GetMusic',songController.getMusicBySongID);
router.get('/GetAssets',songController.getAssetsBySongID);
router.get('/chart',songController.getTop100);
router.get('/explore/song',songController.getNewSong);
router.get('/favoriteSong/:userId',songController.getFavoriteSong);
router.delete('/:songId',songController.deleteSong);
router.post('/',songController.addNewSong);
router.post('/favoriteSong',songController.addFavoriteSong);
module.exports = router;