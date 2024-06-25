import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../../models/UserModel";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)

        const hashedPassword = await bcrypt.hash(password, 10);
        
        if (req.body) {
            const user = new User({ name, email, password:hashedPassword });

            console.log(user)

            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        }


    } catch (error) {
        next(error);
    }
};
