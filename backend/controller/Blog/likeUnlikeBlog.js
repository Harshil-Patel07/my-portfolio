
import Blog from "../../models/BlogSchema.js"
export const likeUnlikeBlog = async (req, res, next) => {
    const { userId, blogId } = req.body;
    try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog or User not found." });
        }
        const isLiked = blog.likes.some(like => like.toString() === userId);
        if (isLiked) {
            blog.likes.pull(userId);
        } else {
            blog.likes.push(userId);
        }
        await blog.save();
        const updatedBlog = await Blog.findById(blogId).populate("likes", "_id fullname email");

        res.status(200).json({ success: true, result: updatedBlog });
    } catch (error) {
        next(error);
    }
};