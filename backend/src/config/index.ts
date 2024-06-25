import dotenv from "dotenv";

dotenv.config();
interface ConfigTypes {
    PORT: number | string;
    MONGODB_URL: string;
    JSON_WEB_TOKEN:string
}

export const config:ConfigTypes = {
    PORT: process.env.PORT || 4000,
    MONGODB_URL: process.env.MONGODB_URL as string,
    JSON_WEB_TOKEN:process.env.JSON_WEB_TOKEN || "HARSHILAGO@#%$$%%&^d878468qw2e87y$^*1331"
};
