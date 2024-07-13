import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import Blog from "../../models/BlogSchema.js";
const createBlogRouter= catchAsyncErrors(async (req, res, next) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        next(error);
    }
}) 

export default createBlogRouter;
