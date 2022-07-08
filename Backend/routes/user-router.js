const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);
router.get("/explore/profile/:userId",userController.exploreProfileUser);
router.get("/users", userController.getUsers);
router.get("/:userId", userController.getUserById);
router.get("/profile/:userId",userController.getProfile);
router.post("/profile",userController.updateProfile);

//router.use(checkAuth);
// router.get("/:name", userController.searchByName);

// router.get("/post/:offset", userController.getPostByOffset);

module.exports = router;
