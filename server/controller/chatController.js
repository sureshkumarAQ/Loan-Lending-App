const {Chat,Message} = require('../models/chatmodels');
const { User } = require('../models/userModels');



exports.accessChat = async(req,res)=>{
    try {
        const user_id = req.user._id;// LogedIn User ID
        const id = req.params.userID; // Id of the user which we want to chat
        if(!id)
        {
            res.status(404).send("User Not Found")
        }

        let isChat = await Chat.find({
            users:{$elemMatch:{$eq:user_id}},
            users:{$elemMatch:{$eq:id}},
        }).populate("users","-password")
            .populate("latestMessage");

        isChat = await User.populate(isChat,{
            path:"latestMessage.sender",
            select:"name email",
        })    
        
        if(isChat.length>0)
        {
            res.send(isChat[0]);
        }
        else
        {
            let newChat = {
                chatName:"sender",
                users:[user_id,id]
            }
            const createdChat = await Chat.create(newChat);
            const fullChat = await Chat.findOne({_id:createdChat._id}).populate("users","-password")
            res.status(200).send(fullChat);
        }
    } catch (error) {
        res.status(500).send({"error occure":error})
    }
}

exports.fetchAllChats = async(req,res)=>{
    try {
        const user_id = req.user._id;
        Chat.find({
            users:{$elemMatch:{$eq:user_id}}
        }).populate("users","-password")
        .populate("latestMessage")
        .sort({updatedAt:-1})
        .then(async(results)=>{
            results=await User.populate(results,{
                path:"latestMessage.sender",
                select:"name email",
            })
            res.status(200).send(results)  
        })
    } catch (error) {
        res.status(500).send({"error occure":error})
    }
}

exports.sendMessage = async(req,res)=>{

    // Sender : LoggedIn user
    // Content : Actual message
    // Chat : chatid from which chat this message is belongs to
    console.log(req.body)
    const {content,chat} = req.body;

    if(!content || !chat)
    {
        res.status(400).send("Invalid data passed")
    }

    let newMessage = {
        sender:req.user._id,
        content:content,
        chat:chat
    }

    console.log(newMessage)

    try {
        
        // Create new message
        let message = await Message.create(newMessage);

        // Populate message by sender
        message = await message.populate("sender","-password");
        // populate message by chat also
        message = await message.populate("chat");
        // Populate user inside chat also
        message = await User.populate(message,{
            path:"chat.users",
            select:"-password"
        })

        // Update letest message
        await Chat.findByIdAndUpdate(chat,{
            letestMessage:message
        });

        res.status(201).send(message)
    } catch (error) {
        res.status(500).send({"error occure":error})
    }
}

exports.allMessage=async(req,res)=>{
    try {
        const message =await Message.find({chat:req.params.chatId})
        .populate("sender","name email")
        .populate("chat")

        res.status(200).send(message)
    } catch (error) {
        res.status(400).send({"error occure":error})
    }
}