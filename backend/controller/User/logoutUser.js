import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

export const logoutUser =catchAsyncErrors(async(req, res, next)=>{
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
})