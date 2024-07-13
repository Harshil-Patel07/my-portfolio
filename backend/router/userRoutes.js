import express from "express";
import { registerUser } from "../controller/User/RegisterUser.js";
import { logoutUser } from "../controller/User/logoutUser.js";
import { loginUser } from "../controller/User/loginUser.js";


const router =express.Router()

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
// router.get("/me",getUser);
// router.put("/update/me",updateProfile);
// router.put("/update/password",updatePassword);

export default router;