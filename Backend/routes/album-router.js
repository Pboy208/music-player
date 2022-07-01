const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album-controller");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);
router.get('/explore/album',albumController.getNewAlbum);

module.exports = router;