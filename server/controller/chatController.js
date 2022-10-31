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