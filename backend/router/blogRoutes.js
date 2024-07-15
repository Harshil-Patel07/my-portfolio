import express from "express";
import getBlogsRouter from "../controller/Blog/getBlogs.js";
import createBlogRouter from "../controller/Blog/createBlog.js";
import deleteBlogRouter from "../controller/Blog/deleteBlog.js";
import updateBlogRouter from "../controller/Blog/updateBlog.js";
import writeComment from "../controller/Blog/writeComment.js";
import deleteComment from "../controller/Blog/deleteComment.js";
import { likeUnlikeBlog } from "../controller/Blog/likeUnlikeBlog.js";
import { auth } from "../middlewares/auth.js";


const router = express.Router()
router.get("/all",auth ,getBlogsRouter)
router.post("/create", createBlogRouter);
router.delete("/delete/:id", deleteBlogRouter);
router.put("/update/:id", updateBlogRouter);
router.put("/comment",writeComment);
router.put("/uncomment",deleteComment)
router.put("/likeUnlike",likeUnlikeBlog)


export default router;
