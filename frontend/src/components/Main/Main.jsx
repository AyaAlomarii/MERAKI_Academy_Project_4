import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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
        m: 4,
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
           
            <Typography
            textAlign="center"
           
            sx={{
                
                backgroundColor: "rgba(0,0,0, 0.8)",
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
              
            </Typography>
<Box m={3} align="center">
<img style={{width:"22%",height:"20%",margin:"15px"}}
        src="https://i.imgur.com/34F1rTZ.png" alt="" />

</Box>
<Paper
      sx={{
        position: 'relative',
       
        borderRadius:" 50px",
       alignContent:"center",
        m:1,
        p:1,
       
       
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
      
       
      }}
    >
      
<Box p={2} m={2} ><Typography variant="h4" align='center'>Khairah is Nonprofit Organization For Help Children.<br/>
It is a long established fact that a reader will be distracted by thethe readable content off a page when looking at its layout point using Lorem Ipsum is that it has.</Typography></Box>
    </Paper>
<Container sx={{ m:3,
  display:"grid",
 gridTemplateColumns:"1fr 1fr 1fr"
}} >
<Card sx={{textAlign:"center" ,m:"auto" ,backgroundColor:"#FFFFFF",borderRadius:"20px",border:"#155fa0 solid"}}  >
<CardContent>
<Typography color={"#FFFFFF"} align='center'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
</svg><br/>

Our Vision<br/>
t is a long established fact that reader distracted by the the readable content off page looking at its layout point.
</Typography>

</CardContent>


</Card>
<Card sx={{ border:"#155fa0 solid",borderRadius:"20px",m:"auto" ,textAlign:"center",m:1,backgroundColor:"primary"}} >
<CardContent>
<Typography align='center'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg><br/>
  Contact Us<br/>
t is a long established fact that reader distracted by the the readable content off page looking at its layout point.
  
</Typography>

</CardContent>
</Card>
<Card sx={{ border:"#155fa0 solid", borderRadius:"20px",m:"auto" ,textAlign:"center", m:1}}>
<CardContent>
<Typography align='center'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg><br/>
  Our Mission<br/>
t is a long established fact that reader distracted by the the readable content off page looking at its layout point.
  
</Typography>

</CardContent>
</Card>
</Container>
          </Container>
      
    
    </Container>
  );
}



export default Main;