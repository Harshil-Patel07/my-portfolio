import { catchAssyncErrors } from "../middlewares/catchAssyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

// CREATE OR SEND MESSAGE 
export const sendMessage = catchAssyncErrors(async (req, res, next) => {
    const { senderName, subject, message } = req.body;

    if (!sendMessage || !subject || !message) {
        return next(new ErrorHandler("Please fill the form", 400))
    }

    const data = await Message.create({
        senderName, subject, message
    })

    res.status(200).json({
        success: true,
        message: "Message Sent",
        data
    })
})

//FETCH ALL MESSAGE
export const getAllMessages = catchAssyncErrors(async (req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
        success: true,
       messages,
    })

})

// DELETE ONE MESSAGE
export const deleteMessage = catchAssyncErrors(async(req,res,next)=>{
    const {id} = req.params;
    const message =await Message.findById(id);
    if(!message){
        return next(new ErrorHandler("Message Alrady Deleted",400));
    }
    console.log(message,'message')
    await message.deleteOne();
    res.status(200).json({
        success:true,
        message:"Message delete successfully,"
    });
})
