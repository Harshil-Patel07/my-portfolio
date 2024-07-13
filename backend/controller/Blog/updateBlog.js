import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import Blog from "../../models/BlogSchema.js";


const updateBlogRouter =catchAsyncErrors( async (req, res, next) => {
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
})

export default updateBlogRouter;
