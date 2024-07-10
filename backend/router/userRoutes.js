import express from "express";
import { getUser, login, logout, register, updatePassword, updateProfile } from "../controller/userControllr.js";


const router =express.Router()

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",getUser);
router.put("/update/me",updateProfile);
router.put("/update/password",updatePassword);

export default router;