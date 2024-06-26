import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    senderName:{
        type:String,
        minLength:[2,"Name shoud have  minimum 2 characters!"]
    },
    subject:{
        type:String,
        minLength:[2,"subject shoud have  minimum 2 characters!"]
    },
    message:{
        type:String,
        minLength:[2,"Message shoud have  minimum 2 characters!"]
    },
    createaAt:{
        type:Date,
        default:Date.now(),
    }
})

export const Message = mongoose.model("Message",messageSchema)