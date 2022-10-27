import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast, Box, 
    Container,
    Text,
    Tabs,
    TabPanels,
    TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

const Apply = () => {
    const history = useHistory();
    const toast = useToast()
    const [loanAmount, setloanAmount] = useState()
    const [interestRate, setinterestRate] = useState()
    const [tenure, settenure] = useState()

    // const baseURL = "http://localhost:3000";


    const submitHandler = ()=>{
        try {
            // const token = cookies.get('jwtoken')
            // console.log({"hear is token " : token})
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            axios
            .post(`/loan/applyLoan`, new URLSearchParams({
                loanAmount:loanAmount,
                interestRate:interestRate,
                tenure:tenure
            },config))
            .then((res) => {
                toast({
                    title: "Loan Applied Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                    colorScheme:"orange"
                });
                history.push('/');
            });
           
        } catch (error) {
            console.log("error occure while applying a new loan")
        }
       
    }


    return (
        

<Container maxW='xl' centerContent>
    <Box d='flex'
        justifyContent='center'
        bg={'white'}
        w="100%"
        m={'40px 0 15px 0'}
        borderRadius="lg"
        borderWidth={'1px'}
        p="4">
        <Text
        fontSize={'4xl'}
        fontFamily="sans-serif"
        color={"orange.500"}

    
    >Apply a new loan request</Text>
    </Box>
    <Box 
    d='flex'
    justifyContent='center'
    bg={'white'}
    w="100%"
    m={'40px 0 15px 0'}
    borderRadius="lg"
    borderWidth={'1px'}
    p="4" color={'black'}>
    <Tabs variant='soft-rounded' colorScheme='orange' >
   
    <TabPanels>
        
        <TabPanel>
        <VStack spacing={'5px'}>
            <FormControl id='loanAmount' isRequired>
                <FormLabel>
                    LoanAmount
                </FormLabel>
                <Input
                    placeholder='Enter loanAmount'
                    onChange={(e)=>setloanAmount(e.target.value)}
                />
            </FormControl>

            <FormControl id='interestRate' isRequired>
                <FormLabel>
                    InterestRate
                </FormLabel>
                <Input
                    placeholder='Enter interestRate'
                    onChange={(e)=>setinterestRate(e.target.value)}
                />
            </FormControl>

            <FormControl id='tenure' isRequired>
                <FormLabel>
                    Tenure
                </FormLabel>
            <InputGroup>
            <Input
                    placeholder='Enter tenure'
                    type='text'
                    onChange={(e)=>settenure(e.target.value)}
                />
                <InputRightElement width={'4.5rem'}>
                </InputRightElement>
            </InputGroup>
            </FormControl>
            <Button 
            colorScheme={'orange'}
            width='100%'
            style={{marginTop:15}}
            onClick={submitHandler}
            >
                Apply for a loan
            </Button>
        </VStack>
        </TabPanel>
    </TabPanels>
    </Tabs>
    </Box>
</Container>
  )
}

export default Apply