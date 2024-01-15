import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Dashboard() {
  const { token, allInitiative, setAllInitiative,setId ,edit,
   } = useContext(tokenContext);
   const [TabValue, setTabValue] = useState(0)
  const [message, setMessage] = useState("");
  const [health, setHealth] = useState([])
  const [education, setEducation] = useState([])
  const [all, setAll] = useState([])



useState
  const HandelRender = () => {
    axios
      .get(`http://localhost:5000/initiative/`)
      .then((res) => {
        
        setAllInitiative(res.data.initiative);
        setAll(res.data.initiative)
        console.log("res", res.data.initiative[0].category.categoryName);
       setHealth( res.data.initiative.filter((ele,i)=>{
        return ele.category.categoryName==="health"
       
      }))
      setEducation(( res.data.initiative.filter((ele,i)=>{
        return ele.category.categoryName==="education"
       
      })))
        
      
      })
      .catch((err) => {
        setMessage({
          messageShow: err.response.data.message,
          status: false,
        });
        console.log("err", err);
      });
  };

  
console.log('first', localStorage.getItem("token"))
  useEffect(() => {
    HandelRender();
  }, []);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
    
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: "10px",
            pb: "6px",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h4"
              margin={3}
              align="center"
              color="text.primary"
              gutterBottom
            >
              All opportunities
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>


          
          {/* {  <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              
            </Stack> } */}

          </Container>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs   value={TabValue} onChange={(e)=>{}} aria-label="basic tabs example">
          
          <Tab  size="medium" label="ALL " onClick={()=>{
            setTabValue(0)
            setAllInitiative(all)
          }} />
          <Tab label="Health " onClick={()=>{
            setTabValue(1)
            setAllInitiative(health)

          }} />
          <Tab label="Item Three" onClick={()=>{
            setTabValue(2)
            setAllInitiative(education)

          }} />
        </Tabs>
      </Box>
     
    </Box>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {allInitiative.map((ele, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={ele.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ele.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                      <Button  onClick={(e) => {
        setId(ele._id)
          navigate(`/initiativeDetails/${ele._id}`);
        }}size="small">View</Button>
                    {<>{edit==="659e5291d2f8fba730f39707"?<>
                      <Button  onClick={(e) => {
        console.log('ele._id', ele)
        axios
        .delete(`http://localhost:5000/initiative/${ele._id}`)
        .then((res) => {
          setAllInitiative( allInitiative.filter((ele1,i)=>{
            return (ele1._id!==ele._id)
        })) 
          allInitiative.splice(i,1)
          console.log('done',allInitiative.length)
        })
        .catch((err) => {
         
          console.log("err", err);
        });
        }}size="small">Delete</Button></>:<></>}</>}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
