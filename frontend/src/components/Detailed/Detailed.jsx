import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useEffect,useState,useContext}from 'react'
import { tokenContext } from '../../App';
import Container from "@mui/material/Container";


const Detailed = () => {
    const values =useContext(tokenContext)
    console.log(values);
  return (
    <>
   <Box sx={{ width: '100%' }}>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={6}>
        <Grid item xs={6}>
         2
        </Grid>
        <Grid item xs={6}>
         3
        </Grid>
        </Grid>
        
        <Grid item xs={6}>
       {console.log('allInitiative', allInitiative)}
        </Grid>
      </Grid> */}
    </Box>
    </>
  )
}

export default Detailed