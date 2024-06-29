import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
    hasPopular:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        required:true,
    }
   
},{
    timestamps:true
})

export const Category = mongoose.model("Category",categorySchema)