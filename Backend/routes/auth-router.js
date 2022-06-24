const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
/**
 * @swagger
 * /auth/sign-up:
 *  post:
 *      summary: Request to sign up into app
 *      tags: [Auth]
 *      consumes:
 *          - application/json
 *      requestBody:
 *          description: Request body
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      - email
 *                      - password
 *                      - phoneNumber
 *                      - name
 *                    properties:
 *                      email:
 *                          type: string
 *                      password:
 *                          type: string
 *                      phoneNumber:
 *                          type: string
 *                      name:
 *                          type: string  
 *      responses: 
 *         '200':
 *              description: The success message
 *              
 */
router.post("/sign-up", authController.signUp);



router.post("/sign-in", authController.signIn);

router.post("/google/sign-in", authController.googleSignIn);

router.post("/reset-password", authController.getResetPasswordLink);

router.post("/reset-password/:resetPwToken", authController.resetPassword);

router.post("/renew-token", authController.renewToken);








//change password
// router.put("");

module.exports = router;
