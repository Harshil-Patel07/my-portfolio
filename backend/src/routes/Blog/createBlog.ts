import express, { Request, Response, NextFunction } from "express";
import Blog from "../../models/BlogModel";

const router = express.Router();

router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        next(error);
    }
});

export default router;
