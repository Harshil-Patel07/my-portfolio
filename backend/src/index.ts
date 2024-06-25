import express from "express";
import { config } from "./config";
import { connectDatabase } from "./config/connectDatabase";
import blogRoutes from "./routes/Blog";
import userRoutes from "./routes/User"; 
import errorHandler from "./middleware/errorHandler";

const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", userRoutes);

app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Running API server at http://localhost:${config.PORT}`);
});
