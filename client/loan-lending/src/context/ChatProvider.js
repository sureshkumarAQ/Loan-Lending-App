import {createContext, useContext,useState,useEffect} from 'react'

const ChatContext = createContext();

const ChatProvider = ({children})=>{
    const [chats,setChats] = useState([]);
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userInfo')));
      }, [])
    const [selectedChat,setSelectedChat] = useState();
    return(
        <ChatContext.Provider
        value= {{chats,setChats,selectedChat,setSelectedChat,user,setUser}}
        >{children}</ChatContext.Provider>
    )
}

export const ChatState=()=>{
    return useContext(ChatContext)
}

export default ChatProvider