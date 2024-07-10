// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";
import { errorMiddeleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRoutes.js";
import userRouter from "./router/userRoutes.js";
import blogRouter from "./router/blogRoutes.js";
import categoryRouter from "./router/categoryRoutes.js";

// Initialize express app
const app = express();

// Configure dotenv
dotenv.config({ path: "./config/config.env" });

// CORS configuration
app.use(cors({
    origin: [process.env.PORTFOLIO_URL, "http://localhost:3000"],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
}));

// Middleware configurations
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

// Route handlers
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddeleware);

export default app;
