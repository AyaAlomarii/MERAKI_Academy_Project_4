import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const Detailed = () => {
  return (
    <>
   <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        1
        </Grid>
        <Grid item xs={6}>
        2
        </Grid>
        <Grid item xs={6}>
         3
        </Grid>
        <Grid item xs={6}>
          4
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Detailed