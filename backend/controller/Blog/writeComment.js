import { catchAssyncErrors } from "../../middlewares/catchAssyncErrors.js";
import Blog from "../../models/BlogSchema.js";

const writeComment = catchAssyncErrors(async (req, res, next) => {
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
