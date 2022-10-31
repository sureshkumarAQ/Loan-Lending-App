const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./userModels");


const chatModel = mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    users:[
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    latestMessage:{
        type:Schema.Types.ObjectId,
        ref:"Message"
    }
},{timestamps:true})

const messageModel = mongoose.Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    content:{
        type:String,
        trim:true,
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref:"Chat"
    }
},{timestamps:true})

const Chat = mongoose.model("Chat", chatModel);
const Message = mongoose.model("Message",messageModel);

module.exports = {Chat,Message};