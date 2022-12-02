import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

import {useHistory} from 'react-router-dom'
import axios  from 'axios'
import Cookies from 'universal-cookie';

const Login = () => {
    const cookies = new Cookies();
    const history = useHistory();
    const toast = useToast()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [show, setshow] = useState(false)
    function showHide(){
        setshow(!show)
    }
    // const baseURL = "http://localhost:3000";
    const submitHandler = async(req,res)=>{

        if(!email || !password )
        {
            toast({
                title: 'Please fill all the details',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
        }
        else
        {
            try {
                let userInfo;
                const config = {
                    headers: {
                        // jwtoken: token,
                       "Content-type": "application/x-www-form-urlencoded",
                    },
                };
                axios
                .post(`/user/login`, new URLSearchParams({
                    email:email,
                    password:password
                },config))
                .then((res) =>{
                    userInfo = res.data;
                    // console.log({"Eee hamar loggedIn userwa ":userInfo})
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));
                    // cookies.set('jwtoken', token);
                });
                
                history.push('/home');
            } catch (error) {
                console.log("error occure while login")
                history.push('/auth');
            }
        }
    }
    return (
        <VStack spacing={'5px'}>

        <FormControl id='email' isRequired>
            <FormLabel>
                Email
            </FormLabel>
            <Input
                placeholder='Enter Email Address'
                onChange={(e)=>setemail(e.target.value)}
            />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>
                Password
            </FormLabel>
           <InputGroup>
           <Input
                placeholder='Enter Password'
                type={show?'text':'password'}
                onChange={(e)=>setpassword(e.target.value)}
            />
            <InputRightElement width={'4.5rem'}>
            <Button h={'1.75rem'} size='sm'  onClick={showHide} >
                {show ? "Hide":"Show"}
            </Button>
            </InputRightElement>
           </InputGroup>
        </FormControl>
        <Button 
        colorScheme={'orange'}
        width='100%'
        style={{marginTop:15}}
        onClick={submitHandler}
        >
            Login
        </Button>
    </VStack>
  )
}

export default Login