import React from 'react'
import {Box} from '@chakra-ui/react'
import ChatBox from '../components/ChatBox'
import MyChats from '../components/MyChats'
import SideDrawer from '../components/SideDrawer'
import { useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import {useHistory} from 'react-router-dom'

const ChatPage = () => {
  const history = useHistory();
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [fetchAgain, setFetchAgain] = useState(false);
  console.log(loggedUser.user)

  return (
    <div>
        <SideDrawer user={loggedUser.user}/>
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
            <MyChats fetchAgain={fetchAgain}/>
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        </Box>
    </div>
  )
}

export default ChatPage