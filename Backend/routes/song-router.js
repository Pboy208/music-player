const express = require("express");
const router = express.Router();
const songController = require("../controllers/song-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);
router.get('/:songId/lyric',songController.getLyrics)
router.get('/chart',songController.getTop100);
router.get('/search',songController.search);
router.get('/favoriteSong',songController.getFavoriteSong);
router.get('/:songId', songController.getAssetsBySongID);

router.get('/explore/song',songController.getNewSong);
router.get('/explore/artist',songController.exploreArtist);
router.delete('/:songId',songController.deleteSong);
router.post('/:songId/listen',songController.increaseTimesPlay);
router.post('/',songController.addNewSong);
router.post('/favoriteSong',songController.addFavoriteSong);

router.post('/search',songController.search);
router.put('/:songId/toggle-like',songController.toggleLikeSong)

module.exports = router;