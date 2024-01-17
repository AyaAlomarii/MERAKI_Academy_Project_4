import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { tokenContext } from '../../App';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Profile() {
    const [userinfo, setUserinfo] = useState({})
    const [allDonation, setAllDonation] = useState([])
    const { edit,
        setEdit,token, setToken, setIsLoggedIn, isLoggedIn ,userId, setUserId} =
        useContext(tokenContext);
    const HandelRender = () => {
        axios
          .get(`http://localhost:5000/donation/${userId}/user`,{
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            
            setAllDonation(res.data.donation)
            setUserinfo( res.data.token)
            console.log("res", res.data);
            console.log("res", res.data.token);

          
            
          
          })
          .catch((err) => {
           
            console.log("err", err);
          });
      };
    
      
    console.log('first', localStorage.getItem("token"))
       useEffect(() => {
HandelRender()
      }, []); 






  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
         
        <Paper sx={{p:2, height:"50vh"}} elevation={0}>
       
        <Card sx={{ display: 'flex' }}>
            {/* style={{height:"30% ",width:"25%",borderRadius:"50%"}}  src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1705445009~exp=1705445609~hmac=bbd49859dfa90a750e4483dc9c7f01157951398ea6d26eb69e798584c3d99749' */}
          <CardMedia
        component="img"
        sx={{height:"30% ",width:"30%",borderRadius:"50%" }}
        image='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1705445009~exp=1705445609~hmac=bbd49859dfa90a750e4483dc9c7f01157951398ea6d26eb69e798584c3d99749'
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{  p:1,m :"20px",flex: '0 auto' }}>
         
         <Typography>{userinfo.author} </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
         
        
        </Box>
      </Box>
      
    </Card>
       
        </Paper>
       
      
           
          
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item xs={12} sm={6} md={4}>
               
              </Grid>
            
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}