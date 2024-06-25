import mongoose, { Schema, Document } from "mongoose";

export interface UserType extends Document {
    name: string;
    email: string;
    password: string;
    role: "Admin" | "User";
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
}, {
    timestamps: true,
});

const User = mongoose.model<UserType>("User", UserSchema);

export default User;
