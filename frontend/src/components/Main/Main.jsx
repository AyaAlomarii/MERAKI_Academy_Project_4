import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Main() {
  

  return (
    <Container
        height="100vh"
    >
    <Paper
      sx={{
        position: 'relative',
        borderRadius:" 50px",
       
        color: '#fff',
        mb: 4,
        filter: "blur(1px)",
        WebkitFilter: "blur(2px)",
        width:"100wv",
        height:"70vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundColor: "rgba(0,0,0, 0.6)",
      }}
    >
    </Paper>
  
        <Container maxWidth="lg">
            {/* <Typography
            sx={{
                backgroundColor: "rgb(0,0,0)",
                backgroundColor: "rgba(0,0,0, 0.4)",
                color: "white",
                fontWeight: "bold",
                border: "3px solid #f1f1f1",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform:" translate(-50%, -50%)",
                ZIndex: "2",
                width: "80%",
                padding: "20px",
                textAlign: "center"
            }}
            textAlign="center"
              component="h2"
              variant="h4"

              margin="auto"
              align="center"
              color="#FFFFFF"
              
              
            >
             
            </Typography> */}
            <Typography
            textAlign="center"
           
            sx={{
                backgroundColor: "rgb(0,0,0)",
                backgroundColor: "rgba(0,0,0, 0.6)",
                color: "white",
                fontWeight: "bold",
              //  border: "3px solid #f1f1f1",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform:" translate(-50%, -50%)",
                ZIndex: "2",
                width: "80%",
                padding: "20px",
                textAlign: "center"
            }}


              variant="h5"
              align="center"
              paragraph
            >
                 All opportunities
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
<Box  align="center">
<Button align="center" sx={{
                m:"auto",
                borderRadius:" 12px",
            }} variant="contained">Main call to action</Button>

</Box>
            



<Paper
      sx={{
        position: 'relative',
       
        borderRadius:" 50px",
        color: '#fff',
        mt: 2,
        
        width:"60wv",
        height:"70vh",
        backgroundSize: 'cover',
        transform:"scale(0.7,0.7)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundImage: `url(https://images.unsplash.com/photo-1515302569996-e150029e73fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
       
      }}
    >
    </Paper>
          {/* {  <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              
            </Stack> } */}

          </Container>
      
    
    </Container>
  );
}



export default Main;