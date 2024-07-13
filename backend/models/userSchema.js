import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Name is Required!'],
    },
    email:{
        type:String,
        required:[true , 'Email is Required!'],
        unique:true,
    },
    phone:{
        type:String,
        maxlength:10,
        minlength:10,
        required:[true , 'Phone number is Required!'],
        unique:true,
    },
    aboutMe:{
        type:String,
        required:[true , 'About Me is Required!'],
    },
    password:{
        type:String,
        required:[true , 'Password is Required!'],
        minlength:[10,"Password must have minimum 10 characters!"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
 
        },
        url:{
            type:String,
        }
    },
  
})


export const User =mongoose.model("User",userSchema);