import React from 'react'
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

const LoanRequest = () => {
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
                        John Doe
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'}>
                        abc@gmail.com
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={600}
                        color={'gray.500'}
                        px={3}
                        mb={3}
                    >
                        CIBIL Score : 34234
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
                        Loan Amount: 1234
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={'semibold'}
                    >
                        Interest Rate: 10
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontWeight={'semibold'}
                    >
                        Tenure: 2years
                    </Text>
                    {/* </VStack> */}

                    <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
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
                            }}>
                            Accept
                        </Button>
                    </Stack>
                </Box>
            </Center >
        </>
    );
}

export default LoanRequest;