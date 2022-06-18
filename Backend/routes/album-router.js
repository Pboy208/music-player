const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album-controller");


router.get('/explore/album',albumController.getNewAlbum);

module.exports = router;