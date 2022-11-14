import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/chatLogics";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ChatState } from "../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import ScrollableChat from "./ScrollableChat";
import {io} from 'socket.io-client'


const ENDPOINT = "http://localhost:3000"
var socket,selectedChatCompare

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage,setNewMessage] = useState("")
  const [socketConnected,setsocketConnected] = useState(false)
  const [istyping,setIstyping] = useState()
  const toast = useToast(false);

  const { selectedChat, setSelectedChat, user} = ChatState();

  const fetchMessage = async()=>{
    if(!selectedChat)return;

    try {
      const config = {
        headers: {
        "Content-type": "application/x-www-form-urlencoded",
        },
       };
       setLoading(true)
      await axios.get(`/chat/${selectedChat._id}`,config).then((res) => {
        setMessages(res.data);
        setLoading(false)
        console.log({"All Messages ":messages})
      });
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to load the Message",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }
  const sendMessage = async(e)=>{
     if(e.key==="Enter" && newMessage!=="")
     {
      // console.log(newMessage,selectedChat)
      try {
        
        const config = {
          headers: {
          "Content-type": "application/x-www-form-urlencoded",
          },
         };
         setNewMessage("")
        await axios.post(`/chat/message/send`, new URLSearchParams({
          content:newMessage,
          chat:selectedChat._id
          },config))
                .then((res) => {
                  // console.log({"data ":res.data})
                  //  Append new message to the message array 
                   setMessages([...messages,res.data]);
                });

      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
     }
  }  
  const typingHandler = (e)=>{
    setNewMessage(e.target.value)
  }  
 
  useEffect(() => {
    fetchMessage()
  }, [selectedChat])
  useEffect(() => {
    socket = io(ENDPOINT,{ transports: ['websocket', 'polling', 'flashsocket'] })
    socket.emit("setup",user);
    socket.on("connection",()=>{
      setsocketConnected(true)
    })
  }, [])
  
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
              <>
              { getSender(user,selectedChat.users)}
              <ProfileModal user={getSenderFull(user,selectedChat.users)}/>
              </>
          </Text>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden">

            {
              loading ?(
                <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
                />
              ):(
                <div>
                  <ScrollableChat messages={messages}/>
                </div>
              )
            }
          <FormControl
              onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={3}
            >
              {!istyping ? (
                <div>
                  {/* <Lottie
                    options={defaultOptions}
                    height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  /> */}
                </div>
              ) : (
                <></>
              )}
              <Input
                variant="filled"
                bg="#E0E0E0"
                placeholder="Enter a message.."
                value={newMessage}
                onChange={typingHandler}
              />
            </FormControl>
          </Box>
        </>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;