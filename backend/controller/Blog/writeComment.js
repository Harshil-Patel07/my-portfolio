import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import Blog from "../../models/BlogSchema.js";

const writeComment = catchAsyncErrors(async (req, res, next) => {
    let { comment, userId, blogId } = req.body || {};
    comment.postedBy = userId;
    Blog.findByIdAndUpdate(
        blogId,
        { $push: { comments: comment } },
        { new: true }
    )
    .populate("comments.postedBy", '_id fullName email')
    .exec()
    .then(result => {
        res.status(200).json({ result });
    })
    .catch(err => {
        res.status(500).json({ err });
    });
});

export default writeComment;
