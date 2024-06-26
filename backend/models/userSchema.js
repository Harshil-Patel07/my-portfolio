import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:[true , 'Name is Required!'],
    },
    email:{
        type:String,
        required:[true , 'Email is Required!'],
    },
    phone:{
        type:String,
        maxlength:10,
        minlength:10,
        required:[true , 'Phone number is Required!'],
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
    resume:{
        public_id:{
            type:String,
   
        },
        url:{
            type:String,
   
        }
    },
    portfolioURL:{
        type:String,
   
    },
    githubURL:String,
    instagramURL:String,
    facebookURL:String,
    twitterURL:String,
    linkedInUrl:String,
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

// For hashing Password
userSchema.pre("save",async function(next){
if(!this.isModified("password")){
    next();
}
this.password =await bcrypt.hash(this.password,10);
});

//compair password whith hashed password
userSchema.methods.comparePassword =async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password)
} 

//GENERATING JSON WEB TOKEN
userSchema.methods.generateJsonWebToken =function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRETE_KEY,{
        expiresIn:process.env.JWT_EXPIRES
    });
};


export const User =mongoose.model("User",userSchema);