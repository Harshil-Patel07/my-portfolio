import dotenv from "dotenv";

dotenv.config();
interface ConfigTypes {
    PORT: number | string;
    MONGODB_URL: string;
}

export const config:ConfigTypes = {
    PORT: process.env.PORT || 4000,
    MONGODB_URL: process.env.MONGODB_URL || "",
};
