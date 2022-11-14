import React from 'react'
import Navigationbar from '../components/navbar'
import LoanRequest from '../components/LoanRequest'
import { SimpleGrid } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Navigationbar></Navigationbar>

      <SimpleGrid columns={3} spacing={10}>
        <LoanRequest />
        <LoanRequest />
        <LoanRequest />
        <LoanRequest />
      </SimpleGrid>
    </>
  )
}

export default Home