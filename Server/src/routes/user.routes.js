import { Router } from "express";
import { getUser, loginUser, newAcessToken, registerUser } from "../Controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import VerifyUser from "../middlewares/VerifyUser.js";

const router= Router()


// route for signup the user
router.route('/signup').post(upload.none(),registerUser)

// route for login the user
router.route('/login').post(upload.none(),loginUser)

// route for get the user detail
router.route("/getUser").get(VerifyUser,getUser)

// route for genrating new token
router.route("/token").get(newAcessToken)

export default router


