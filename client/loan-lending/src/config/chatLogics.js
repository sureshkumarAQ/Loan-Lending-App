export const getSender = (loggedUser, chatusers) => {
  // console.log({"loggedUser from chat logics ":loggedUser})
  // console.log({"chat users from chat logics ":chatusers})
  return loggedUser.user._id !== chatusers[0]._id
    ? chatusers[0].name
    : chatusers[1].name;
};

export const getSenderFull = (loggedUser, selectedChatUser) => {
  // console.log({"loggedUser from chat logics ":loggedUser})
  // console.log({"selectedChatUsers from chat logics ":selectedChatUser})
  return loggedUser.user._id !== selectedChatUser[0]._id
    ? selectedChatUser[0]
    : selectedChatUser[1];
};
export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};
