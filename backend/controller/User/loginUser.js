import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { User } from "../../models/userSchema.js";

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email }).select('+password');
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: existingUser._id, role: existingUser.role },
            process.env.JWT_SECRETE_KEY,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
