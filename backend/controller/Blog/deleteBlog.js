import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import Blog from "../../models/BlogSchema.js";

const deleteBlogRouter =catchAssyncErrors( async (req , res , next) => {
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
})

export default deleteBlogRouter;
