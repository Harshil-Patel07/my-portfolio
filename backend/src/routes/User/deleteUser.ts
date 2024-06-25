import express, { Request, Response, NextFunction } from "express";
import User from "../../models/UserModel";


const deleteUserRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; 
        const user = await User.findByIdAndDelete(id);
        console.log(user)

        console.log(id)
        if (!user) {
            return res.status(404).json({ error: "User does not exist." });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};

export default deleteUserRoute;
