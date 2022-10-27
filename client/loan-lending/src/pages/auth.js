import { 
    Box, 
    Container,
    Text,
    Tab,
    TabList,
    Tabs,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Auth = () => {
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

          
          >The Loan Lenders</Text>
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
          <TabList mb={'1em'}>
              <Tab w={"50%"}>Login</Tab>
              <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
              <Login/>
              </TabPanel>
              <TabPanel>
              <Signup/>
              </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
    </Container>
  )
}

export default Auth