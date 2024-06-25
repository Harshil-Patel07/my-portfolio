import express, { Request, Response, NextFunction } from "express";
import Blog from "../../models/BlogModel";

const updateBlogRouter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        next(error);
    }
}

export default updateBlogRouter;
