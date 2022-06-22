const express = require("express");
const router = express.Router();
const songController = require("../controllers/song-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.get('/GetImage',songController.getImageBySongID);
router.get('/:songId',songController.getMusicBySongID);
router.get('/GetAssets',songController.getAssetsBySongID);
router.get('/chart',songController.getTop100);
router.get('/explore/song',songController.getNewSong);
router.get('/favoriteSong/:userId',songController.getFavoriteSong);
router.delete('/:songId',songController.deleteSong);
router.post('/',songController.addNewSong);
router.post('/favoriteSong',songController.addFavoriteSong);
router.get('/search',songController.search);


module.exports = router;