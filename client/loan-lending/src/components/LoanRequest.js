
import React, { useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

import {
    Heading,
    Avatar,
    Box,
    Center,
    Button,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const LoanRequest = (props) => {
    // const loan = JSON.parse(props.loan);
    // console.log(props.loan.interestRate)
    const history = useHistory();
    function AcceptHandler(loanid)
    {
        // console.log(loanid)
        try {
            const config = {
                headers: {
                "Content-type": "application/x-www-form-urlencoded",
                },
            };
        
            axios
            .post(`/loan/acceptLoan/${loanid}`, new URLSearchParams(config))
            .then((res) =>{
      
              history.push('/home')
            });
        } catch (error) {
        }
    }
    function modifyHandler(loanid)
    {
       history.push(`/modify/${loanid}`);        
    }
    return (
        <>
            <Center py={6}>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://bit.ly/naruto-sage'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                       {props.loan.userWhoApplyForLoan.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'}>
                    {props.loan.userWhoApplyForLoan.email}
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={600}
                        color={'gray.500'}
                        px={3}
                        mb={3}
                    >
                        CIBIL Score : {props.loan.userWhoApplyForLoan.cibilScore}
                    </Text>

                    <Text
                        textAlign={'center'}
                        fontWeight={'bold'}
                        fontSize={'2xl'}
                        color={'orange.500'}
                        px={3}
                        mb={3}
                    >
                        Loan Details
                    </Text>
                    {/* <VStack align={'center'} justify={'center'} direction={'row'} > */}
                    <Text
                        textAlign={'center'}
                        fontWeight={'semibold'}
                    >
                        Loan Amount: {props.loan.loanAmount}
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={'semibold'}
                    >
                        Interest Rate: {props.loan.interestRate}
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={'semibold'}
                    >
                        Tenure: {props.loan.tenure}
                    </Text>
                    {/* </VStack> */}

                    <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}
                            onClick={()=>modifyHandler(props.loan._id)}>
                            Modify
                        </Button>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'orange.500'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'orange.400',
                            }}
                            _focus={{
                                bg: 'orange.400',
                            }}
                            onClick={()=>AcceptHandler(props.loan._id)}
                            >

                            Accept
                        </Button>
                    </Stack>
                </Box>
            </Center >
        </>
    );
}

export default LoanRequest;