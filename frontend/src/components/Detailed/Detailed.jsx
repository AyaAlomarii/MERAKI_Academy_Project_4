import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useEffect,useState,useContext}from 'react'
import { tokenContext } from '../../App';
import Container from "@mui/material/Container";

import axios from "axios";

const Detailed = () => {
  const [details, setDetails] = useState(second)
  const HandelRender = () => {
    axios
      .get(`http://localhost:5000/initiative/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
      
      })
      .catch((err) => {
      
        console.log("err", err);
      });
  };

  useEffect(() => {
    HandelRender();
  }, []);
    const {allInitiative} =useContext(tokenContext)
    console.log(allInitiative);
  return (
    <>
   <Box sx={{ width: '100%' }}>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={6}>
        <Grid item xs={6}>
         2
        </Grid>
        <Grid item xs={6}>
         3
        </Grid>
        </Grid>
        
        <img src="" alt="" />
        <Grid item xs={6}>
      
        </Grid>
      </Grid> 
    </Box>
    </>
  )
}

export default Detailed