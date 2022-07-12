const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);
router.post("/google/sign-in", authController.googleSignIn);
router.post("/reset-password", authController.getResetPasswordLink);
router.post("/reset-password/:resetPwToken", authController.resetPassword);
router.post("/renew-token", authController.renewToken);
module.exports = router;