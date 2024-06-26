import express from "express";
import getBlogsRouter from "../controller/Blog/getBlogs.js";
import createBlogRouter from "../controller/Blog/createBlog.js";
import deleteBlogRouter from "../controller/Blog/deleteBlog.js";
import updateBlogRouter from "../controller/Blog/updateBlog.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router()
router.get("/all",getBlogsRouter)
router.post("/create",isAuthenticated, createBlogRouter);
router.delete("/delete/:id",isAuthenticated, deleteBlogRouter);
router.put("/update/:id",isAuthenticated, updateBlogRouter);


export default router;
