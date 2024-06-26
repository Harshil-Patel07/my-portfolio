import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import Blog from "../../models/BlogSchema.js";


const getBlogsRouter =catchAssyncErrors( async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            totalBlogs:blogs?.length,
           blogs,
        });
    } catch (error) {
        next(error);
    }
})

export default getBlogsRouter;