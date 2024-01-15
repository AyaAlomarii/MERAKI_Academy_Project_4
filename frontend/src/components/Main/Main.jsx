import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Main() {
  

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        width:"100wv",
        height:"70vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://img.freepik.com/free-photo/bread-slices-frame-with-copy-space_23-2148544655.jpg?w=1380&t=st=1705353509~exp=1705354109~hmac=ab996c5f2328942721b82e780b7b86eded9bd8dbc1959081a259744ef4d9cbba)`,
      }}
    >
        
  
  <Box sx={{
    m:"auto",
    textAlign:"right"}}>
  <Typography>WELCOME</Typography>

  </Box>
      
    </Paper>
  );
}



export default Main;