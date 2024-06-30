import express from "express";
import getBlogsRouter from "../controller/Blog/getBlogs.js";
import createBlogRouter from "../controller/Blog/createBlog.js";
import deleteBlogRouter from "../controller/Blog/deleteBlog.js";
import updateBlogRouter from "../controller/Blog/updateBlog.js";
import { isAuthenticated } from "../middlewares/auth.js";
import writeComment from "../controller/Blog/writeComment.js";
import deleteComment from "../controller/Blog/deleteComment.js";
import { likeUnlikeBlog } from "../controller/Blog/likeUnlikeBlog.js";


const router = express.Router()
router.get("/all",getBlogsRouter)
router.post("/create",isAuthenticated, createBlogRouter);
router.delete("/delete/:id",isAuthenticated, deleteBlogRouter);
router.put("/update/:id",isAuthenticated, updateBlogRouter);
router.put("/comment",isAuthenticated,writeComment);
router.put("/uncomment",isAuthenticated,deleteComment)
router.put("/likeUnlike",isAuthenticated,likeUnlikeBlog)


export default router;
