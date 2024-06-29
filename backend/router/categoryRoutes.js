import express from "express";
import { getAllCategory, getSingleCategory } from "../controller/Category/getCategory.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { deleteCategory } from "../controller/Category/deleteCategory.js";
import { updateCategory } from "../controller/Category/updateCategory.js";
import { createCategory } from "../controller/Category/createCategory.js";
const router =express.Router()

// http://localhost:4000/api/category/all
router.get("/all",getAllCategory); 

// http://localhost:4000/api/category/next-js
router.get("/:slug",getSingleCategory); 

// http://localhost:4000/api/category/delete/668041e79c049cdbede9b5be
router.delete("/delete/:id",isAuthenticated,deleteCategory)


 // http://localhost:4000/api/category/update/668041e79c049cdbede9b5be
router.patch("/update/:id",isAuthenticated,updateCategory)

// http://localhost:4000/api/category/create
router.post("/create",isAuthenticated,createCategory)
export default router;