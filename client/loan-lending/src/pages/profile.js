import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { useColorModeValue, SimpleGrid, AspectRatio, Center, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, FormHelperText } from '@chakra-ui/react'
import LoanDetails from '../components/LoanDetails';
import Navigationbar from '../components/navbar'
import ModifiedLoanRequest from '../components/ModifiedLoanDetails';

import { Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { Button,Toast } from "@chakra-ui/react";
import { getSender } from '../config/chatLogics';
import {ChatState} from '../context/ChatProvider'

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setuserData] = useState()
  const toast = useToast();
  const profile=async()=>{
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },}

      const userDetails = await axios.get(`user/profile`,config);
      setuserData(userDetails.data)
      console.log(userData)
    } catch (error) {
      toast({
        title: "Error fetching the data",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  }

  useEffect(() => {
  profile();
  }, [])
  return (
    <Container fluid='lg' >
      <Navigationbar></Navigationbar>
      <Row>
        <Col>
          <Box>
            <AspectRatio maxW='290px' ratio={10 / 9}>
              <Image src='https://bit.ly/naruto-sage' alt='profileImage' objectFit='cover' />
            </AspectRatio>
          </Box>
          <Box maxW='290px' mt={5}>
            <Form.Group controlId="formCategory8">
              <Form.Label><b>Profile Image</b></Form.Label>
              <Form.Control type="file" name="profileImage"  />
            </Form.Group>
            <Button
              colorScheme={'orange'}
              width='35%'
              style={{ marginTop: 5 }}
            // onClick={submitHandler}
            >
              Update
            </Button>
          </Box>
        </Col>

        <Col>
          <Box color='black' d='flex'
            justifyContent='center'
            w="100%"
            fontSize="xs"
            fontWeight='bold'
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
          >
            <Form className="form">
              <Form.Group controlId="formCategory1">
                <Form.Label>{userData.name}</Form.Label>
                <Form.Control type="text" defaultValue="John Doe" disabled />
              </Form.Group>

              <Form.Group controlId="formCategory2">
                <Form.Label>{userData.email}</Form.Label>
                <Form.Control type="email" defaultValue="abc@gmail.com" disabled />
              </Form.Group>

              <Form.Group controlId="formCategory3">
                <Form.Label>CTC (Cost To Company)</Form.Label>
                <Form.Control type="text" defaultValue="12345" disabled />
              </Form.Group>

              <Form.Group controlId="formCategory4">
                <Form.Label>CIBIL Score</Form.Label>
                <Form.Control type="text" defaultValue="12345" disabled />
              </Form.Group>

              <Form.Group controlId="formCategory5">
                <Form.Label>Max Loan Score</Form.Label>
                <Form.Control type="text" defaultValue="12345" disabled />
              </Form.Group>
            </Form>
          </Box>
        </Col>

        <Col>
          <Box color='black' d='flex'
            justifyContent='center'
            w="100%"
            m={'40px 0 15px 0'}
            // borderRadius="lg"
            fontSize="xs"
            fontWeight='bold'
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
          >
            <Form className="form">
              <Form.Group controlId="formCategory6">
                <Form.Label>Aadhar Card</Form.Label>
                <Form.Control type="file" name="aadharCard"  />
              </Form.Group>
              <Button
                colorScheme={'orange'}
                width='35%'
                style={{ marginTop: 5 }}
              // onClick={submitHandler}
              >
                Update
              </Button>

              <Form.Group controlId="formCategory7">
                <Form.Label>PAN Card</Form.Label>
                <Form.Control type="file" name="panCard" />
              </Form.Group>
              <Button
                colorScheme={'orange'}
                width='35%'
                style={{ marginTop: 5 }}
              // onClick={submitHandler}
              >
                Update
              </Button>
            </Form>
          </Box>
        </Col>
      </Row>

      <Row>
        <Center bg='orange.500' h='10px' m={5} >
        </Center>
      </Row>

      <Row>
        <Col>
          <Box d='flex'>
            <Center bg='orange.500' h='60px' color='white' m={'0 0 15px 0'}
              fontWeight='semibold' borderRadius='full'>
              ACCEPTED LOAN REQUESTS
            </Center>
          </Box>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <Row>
        <SimpleGrid columns={3} spacing={10}>
          <LoanDetails />
          <LoanDetails />
          <LoanDetails />
          <LoanDetails />
        </SimpleGrid>
      </Row>

      <Row>
        <Col>
          <Box d='flex'>
            <Center justifyContent='center' bg='orange.500' h='60px' color='white' m={'25px 0 15px 0'} borderRadius='full' fontWeight='semibold'>
              MODIFIED LOAN REQUESTS
            </Center>
          </Box>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <Row>
        <SimpleGrid columns={3} spacing={10}>
          <ModifiedLoanRequest />
          <ModifiedLoanRequest />
          <ModifiedLoanRequest />
          <ModifiedLoanRequest />
        </SimpleGrid>
      </Row>

    </Container >
  )
}

export default Profile