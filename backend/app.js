import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";
import { errorMiddeleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRoutes.js";
import userRouter from "./router/userRoutes.js"
import blogRouter from "./router/blogRoutes.js"
import categoryRouter from "./router/categoryRoutes.js"
const app=express();
dotenv.config({path:"./config/config.env"})

app.use(cors({
    origin:[process.env.PORTFOLIO_URL,process.env.DASHBOARD_URL],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}))

app.use("/api/message",messageRouter)
app.use("/api/user",userRouter)
app.use("/api/blog",blogRouter)
app.use("/api/category",categoryRouter)

dbConnection()
app.use(errorMiddeleware)

export default app;