import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import axios from "axios";

const Signup = () => {
    const history = useHistory();
    const toast = useToast()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [ctc, setctc] = useState()
    const [age, setage] = useState()
    const [password, setpassword] = useState()
    const [show, setshow] = useState(false)
    function showHide(){
        setshow(!show)
    }
    // const baseURL = "http://localhost:3000";


    const submitHandler = ()=>{
        if(!email || !password || !name || !ctc || !age)
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
                const config = {
                    headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                    },
                };

                axios
                .post(`/user/signup`, new URLSearchParams({
                    email:email,
                    name:name,
                    password:password,
                    ctc:ctc,
                    age:age
                },config))
                .then((res) =>{
                    toast({
                        title: "Registration Successful",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                    });
                    history.push('/home');
                });
            } catch (error) {
                toast({
                    title: "Error occure while registration",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
                history.push('/auth');
            }
        }
       
    }


    return (
        <VStack spacing={'5px'}>
        <FormControl id='name' isRequired>
            <FormLabel>
                Name
            </FormLabel>
            <Input
                placeholder='Enter Your Full Name'
                onChange={(e)=>setname(e.target.value)}
            />
        </FormControl>

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

        <FormControl id='ctc' isRequired>
            <FormLabel>
                CTC
            </FormLabel>
            <Input
                placeholder='Enter Your CTC'
                onChange={(e)=>setctc(e.target.value)}
            />
        </FormControl>

        <FormControl id='age' isRequired>
            <FormLabel>
                Age
            </FormLabel>
            <Input
                placeholder='Enter Your Age'
                onChange={(e)=>setage(e.target.value)}
            />
        </FormControl>
        <Button 
        colorScheme={'orange'}
        width='100%'
        style={{marginTop:15}}
        onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup