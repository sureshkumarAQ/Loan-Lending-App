export const getSender = (loggedUser, chatusers) => {
    // console.log({"loggedUser from chat logics ":loggedUser})
    // console.log({"chat users from chat logics ":chatusers})
    return  loggedUser.user._id!==chatusers[0]._id?chatusers[0].name:chatusers[1].name ;
};  

export const getSenderFull = (loggedUser, selectedChatUser) => {
    // console.log({"loggedUser from chat logics ":loggedUser})
    // console.log({"selectedChatUsers from chat logics ":selectedChatUser})
    return  loggedUser.user._id!==selectedChatUser[0]._id?selectedChatUser[0]:selectedChatUser[1];
};  
