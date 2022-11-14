import {
    Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast, Box,
    Container, Text, Tabs, TabPanels, TabPanel
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";

const Modify = () => {
    const history = useHistory();
    const toast = useToast()
    const [loanAmount, setloanAmount] = useState()
    const [interestRate, setinterestRate] = useState()
    const [tenure, settenure] = useState()

    const [prevloanAmount, setprevloanAmount] = useState()
    const [previnterestRate, setprevinterestRate] = useState()
    const [prevtenure, setprevtenure] = useState()

    // const baseURL = "http://localhost:3000";

    const loanID = "635ad02b36b35847c2bd943c";

    useEffect(() => {
        axios.get(`/loan/oneloan/${loanID}`)
            .then(function (response) {
                setprevloanAmount(response.data.loanAmount);
                setprevinterestRate(response.data.interestRate);
                setprevtenure(response.data.tenure);
                console.log(response.data);
            })
    }, []);

    const submitHandler = () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            axios
                .post(`/loan/modify/${loanID}`, new URLSearchParams({
                    modifiedLoanAmount: loanAmount,
                    modifiedInterestRate: interestRate,
                    modifiedTenure: tenure
                }, config))
                .then((res) => {
                    toast({
                        title: "Loan Update Successful",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                        color: "orange"
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
                >Modify loan</Text>
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
                                        placeholder={`${prevloanAmount}`}
                                        onChange={(e) => setloanAmount(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl id='interestRate' isRequired>
                                    <FormLabel>
                                        InterestRate
                                    </FormLabel>
                                    <Input
                                        placeholder={`${previnterestRate}`}
                                        onChange={(e) => setinterestRate(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl id='tenure' isRequired>
                                    <FormLabel>
                                        Tenure
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            placeholder={`${prevtenure}`}
                                            type='text'
                                            onChange={(e) => settenure(e.target.value)}
                                        />
                                        <InputRightElement width={'4.5rem'}>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    colorScheme={'orange'}
                                    width='100%'
                                    style={{ marginTop: 15 }}
                                    onClick={submitHandler}
                                >
                                    Send Modified Loan Request
                                </Button>
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Modify