const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");
const checkAuth = require("../middleware/check-auth");

router.get("/users", userController.getUsers);
router.get("/:userId", userController.getUserById);
//router.use(checkAuth);
// router.get("/:name", userController.searchByName);

// router.get("/post/:offset", userController.getPostByOffset);

module.exports = router;