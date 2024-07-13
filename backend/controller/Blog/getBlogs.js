import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import Blog from "../../models/BlogSchema.js";

const getBlogsRouter = catchAsyncErrors(async (req, res, next) => {
    try {
        const blogs = await Blog.find()
            .populate({
                path: 'likes',
                select: '_id fullname email'
            })
        res.status(200).json({
            success: true,
            totalBlogs: blogs?.length,
            blogs,
        });
    } catch (error) {
        next(error);
    }
});

export default getBlogsRouter;
