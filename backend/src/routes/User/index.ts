import express from "express";
import { body } from "express-validator";
import { registerUser } from "./registerUser";
import { loginUser } from "./loginUser";
import deleteUserRoute from "./deleteUser";


const router = express.Router();
// Register User
router.post(
    "/register",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Email is invalid"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
    ],
    registerUser
);
// Login User
router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Email is invalid"),
        body("password").notEmpty().withMessage("Password is required")
    ],
    loginUser
);

// delete user
router.delete("/delete/:id",deleteUserRoute)


export default router;
