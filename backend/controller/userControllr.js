import { catchAssyncErrors } from "../middlewares/catchAssyncErrors.js"
import ErrorHandler from "../middlewares/error.js"
import { User } from "../models/userSchema.js"
import { v2 as cloudinary } from "cloudinary"
import { generateToken } from "../utils/jwtToken.js"

export const register = catchAssyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Avatar and Resume Required!", 400))
    }

    const { avatar, resume } = req.files;

    const cloudinaryResponseForAvatar = await cloudinary.uploader.upload(
        avatar.tempFilePath,
        { folder: "AVATARS" }
    );
    if (!cloudinaryResponseForAvatar || cloudinaryResponseForAvatar.error) {
        console.error("Cloudinary Error:", cloudinaryResponseForAvatar.error || "UnKnown Cloudinary Error")
    }


    const cloudinaryResponseForResume = await cloudinary.uploader.upload(
        resume.tempFilePath,
        { folder: "RESUMES" }
    );
    if (!cloudinaryResponseForResume || cloudinaryResponseForResume.error) {
        console.error("Cloudinary Error:", cloudinaryResponseForResume.error || "UnKnown Cloudinary Error")
    }

    const {
        email,
        fullName,
        phone,
        aboutMe,
        password,
        portfolioURL,
        githubURL,
        instagramURL,
        facebookURL,
        twitterURL,
        linkedInUrl
    } = req.body;

        const user= await User.create({
            email,
            fullName,
            phone,
            aboutMe,
            password,
            portfolioURL,
            githubURL,
            instagramURL,
            facebookURL,
            twitterURL,
            linkedInUrl,
            // avatar:{
            //     public_id: cloudinaryResponseForAvatar.public_id,
            //     url: cloudinaryResponseForAvatar.secure_url
            // },
            // resume: {
            //     public_id: cloudinaryResponseForResume.public_id,
            //     url: cloudinaryResponseForResume.secure_url
            // }
        });

     generateToken(user,"User Ragister !",201,res)
});
// LOGIN THE USER
export const login = catchAssyncErrors(async(req,res,next)=>{
    const {email,password} =req.body;

    if(!email || !password){
        return next(new ErrorHandler("Email and Password Required!"))
    }

    const user= await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password!"))
    }

    const isPasswordMatched =await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password!"))
    }

    generateToken(user,"Logged In",200,res)
})

//LOGOUT USER 

export const logout = catchAssyncErrors(async(req,res,next)=>{
    res.status(200).cookie("token",null,
    {
        expires:new Date(Date.now()),
        httpOnly:true,
    }).json({
        success:true,
        message:"Logged Out!"
    })
})

//GET ALL USER
export const getUser=catchAssyncErrors(async(req,res,next)=>{
    const user=await User.findById(req.user._id);
    res.status(200).json({
        success:true,
        user
    })
})

// UPDATE PROFILE
export const updateProfile=catchAssyncErrors(async(req,res,next)=>{
    const newUserData={
        email:req.body.email,
        fullName:req.body.fullName,
        phone:req.body.phone,
        aboutMe:req.body.aboutMe,
        portfolioURL:req.body.portfolioURL,
        githubURL:req.body.githubURL,
        instagramURL:req.body.instagramURL,
        facebookURL:req.body.facebookURL,
        twitterURL:req.body.twitterURL,
        linkedInUrl:req.body.linkedInUrl
    };

    // update avatar
   if(req.files && req.files.avatar){
    const avatar = req.files.avatar;
    const user =await User.findById(req.user._id);
    const profileImageId = user.avatar.public_id;
    await cloudinary.uploader.destroy(profileImageId);
    const cloudinaryResponse = await cloudinary.uploader.upload(
        avatar.tempFilePath,
        { folder: "AVATARS" }
    );
    newUserData.avatar={
        public_id:cloudinaryResponse.public_id,
        url:cloudinaryResponse.secure_url,
    }
   }

   //update resume
   if(req.files && req.files.resume){
    const resume = req.files.resume;
    const user =await User.findById(req.user._id);
    const resumeId = user.resume.public_id;
    await cloudinary.uploader.destroy(resumeId);
    const cloudinaryResponse = await cloudinary.uploader.upload(
        resume.tempFilePath,
        { folder: "RESUMES" }
    );
    newUserData.resume ={
        public_id:cloudinaryResponse.public_id,
        url:cloudinaryResponse.secure_url,
    };
   }

   const user =await User.findByIdAndUpdate(req.user._id,newUserData,{
    new:true,
    runValidators:true,
    userFindAndModify:true
   });
   res.status(200).json({
    success:true,
    message:"Profile updated !",
    user,
   })
})


// Update Password
export const updatePassword =catchAssyncErrors(async(req,res,next)=>{
   const {currentPassword,newPassword, confirmNewPassword}=req.body;

   if(!currentPassword || !newPassword || !confirmNewPassword){
    return next(new ErrorHandler("Please fill all fields...",400));
   }
   const user= await User.findById(req.user._id).select("+password");
   const isPasswordMatched = await user.comparePassword(currentPassword)

   if(!isPasswordMatched){
    return next(new ErrorHandler("Incurrect Current Password",400));
   }

   if(newPassword !== confirmNewPassword){
    return next(new ErrorHandler("NewPassword and confirmNewPassword is not matched...",400));
   }

   user.password = newPassword;

   await user.save();

   res.status(200).json({
    success:true,
    message:"Password Updated !",
   })
})