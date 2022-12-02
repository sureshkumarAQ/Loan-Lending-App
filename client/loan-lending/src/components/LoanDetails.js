import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const LoanDetails = () => {
    return (
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
            </Box>
        </Center >
    );
}

export default LoanDetails;