import { User } from "../models/userSchema.js";
import { catchAssyncErrors } from "./catchAssyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAssyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("User is not authenticated!", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
        return next(new ErrorHandler("User not found!", 404));
    }

    next();
});
