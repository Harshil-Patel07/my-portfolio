import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import Blog from "../../models/BlogSchema.js";
import mongoose from 'mongoose';

const deleteComment = catchAssyncErrors(async (req, res, next) => {
    const { commentId, blogId, userId } = req.body || {};


    if (!mongoose.Types.ObjectId.isValid(blogId) || !mongoose.Types.ObjectId.isValid(commentId) || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

  
    const blog = await Blog.findById(blogId);
    if (!blog) {
        return res.status(404).json({ message: "Blog post not found" });
    }


    const comment = blog.comments.id(commentId);
    if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
    }

    
    if (comment.postedBy._id !== userId) {
        return res.status(403).json({ message: "You are not authorized to delete this comment" });
    }

   
    blog.comments.pull({ _id: commentId });
    await blog.save();


    const updatedBlog = await Blog.findById(blogId).populate("comments.postedBy", "_id name");

    res.status(200).json({ result: updatedBlog });
});

export default deleteComment;
