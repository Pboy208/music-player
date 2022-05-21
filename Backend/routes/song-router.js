const express = require("express");
const router = express.Router();
const songController = require("../controllers/song-controller.js");


router.get('/GetImage',songController.getImageBySongID);
router.get('/GetMusic',songController.getMusicBySongID);
router.get('/GetAssets',songController.getAssetsBySongID);
router.get('/GetTop100',songController.getTop100)
module.exports = router;