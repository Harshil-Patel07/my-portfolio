import express from "express";
import getBlogsRouter from "./getBlogs";
import createBlogRouter from "./createBlog";
import updateBlogRouter from "./updateBlog";
import deleteBlogRouter from "./deleteBlog";

const router = express.Router();

router.get("/", getBlogsRouter);
router.post("/create", createBlogRouter);
router.delete("/delete/:id", deleteBlogRouter);
router.put("/update/:id", updateBlogRouter);


export default router;
