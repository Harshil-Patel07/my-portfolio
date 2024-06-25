import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../config";
import User from "../../models/UserModel";


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, config.JSON_WEB_TOKEN, { expiresIn: "7d" });
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};
