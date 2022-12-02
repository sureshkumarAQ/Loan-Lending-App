import Navigationbar from '../components/navbar'
import LoanRequest from '../components/LoanRequest'
import { SimpleGrid } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

const Home = () => {
  const history = useHistory();
  const [loans, setloans] = useState([])

  useEffect(() => {
    try {
      const config = {
          headers: {
          "Content-type": "application/x-www-form-urlencoded",
          },
      };
  
      axios
      .get(`/loan/getloans`, new URLSearchParams(config))
      .then((res) =>{

        // console.log(res.data);
          setloans( res.data);
      });
  } catch (error) {
  }
  }, [])
  
  
  return (
    <>
      <Navigationbar></Navigationbar>

      <SimpleGrid columns={3} spacing={10}>
        {
          loans.map((loan,i)=>(
            <LoanRequest loan={loan}/>
          ))
        }
      </SimpleGrid>
    </>
  )
}

export default Home