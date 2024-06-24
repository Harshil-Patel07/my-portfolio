import express from "express";
import getBlogsRouter from "./getBlogs";
import createBlogRouter from "./createBlog";
import updateBlogRouter from "./updateBlog";
import deleteBlogRouter from "./deleteBlog";

const router = express.Router();

// Mount the routers
router.use("/", getBlogsRouter);
router.use("/", createBlogRouter);
router.use("/", updateBlogRouter);
router.use("/", deleteBlogRouter);

export default router;
