import express, {  } from "express";
import { config } from "./config";
import { connectDatabase } from "./config/connectDatabase";
import blogRoutes from "./routes/Blog";
import errorHandler from "./middleware/errorHandler";

const app = express();

connectDatabase();
app.use(express.json());


app.use("/api/blogs", blogRoutes);

app.use(errorHandler);




app.listen(config.PORT, () => {
    console.log(`Running API server at http://localhost:${config.PORT}`);
});
