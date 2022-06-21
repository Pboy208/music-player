const express = require("express");
const router = express.Router();
const postController = require("../controllers/post-controller.js");
const checkAuth = require('../middleware/check-auth');

router.use(checkAuth);

router.post('/',postController.addNewPost);
router.post('/comment',postController.addComment);
module.exports = router;