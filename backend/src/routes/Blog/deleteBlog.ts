import express, { Request, Response, NextFunction } from "express";
import Blog from "../../models/BlogModel";

const deleteBlogRouter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        next(error);
    }
}

export default deleteBlogRouter;
