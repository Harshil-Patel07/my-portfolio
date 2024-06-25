import express, { Request, Response, NextFunction } from "express";
import Blog from "../../models/BlogModel";

const getBlogsRouter= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        next(error);
    }
}

export default getBlogsRouter;