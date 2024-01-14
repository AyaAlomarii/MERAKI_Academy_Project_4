import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useEffect,useState,useContext}from 'react'
import { tokenContext } from '../../App';
import Container from "@mui/material/Container";
import { Routes, Route, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import axios from "axios";
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

/* import  BottomNavigation from "@mui/material";
import  BottomNavigationAction from "@mui/material"; */


import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
const Item = styled(Paper)(({ theme }) => ({

borderStyle:"none",
border:"none",
  textAlign: 'center',
  
}));
const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Detailed = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const HandelRender = () => {
    axios
      .get(`http://localhost:5000/initiative/${id}`)
      .then((res) => {
      setDetails(res.data.initiative)
      
      })
      .catch((err) => {
      
        console.log("err", err);
      });
  };

  useEffect(() => {
    HandelRender();
  }, []);
    const {allInitiative} =useContext(tokenContext)
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  return (
    <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      {details.name}
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src={details.img}
        height={325}
      />
     
    </Box>
    <Typography variant="h5" component="h4" marginTop={3}>
    Description
    </Typography>
    <Box sx={{ display: "flex" }}>
      <Typography variant="h7" component="p" marginY={2}>
       {details.description}<br/>
      
      </Typography>
      
      {/* 
 
 
  "currentAmount": 0,
  "volunteerLimit": 10,
  
    "listOfDuties": [
      "Support Education Access: Strive to make education accessible by fostering a positive learning environment and encouraging active participation",
      "Achieve Learning Engagement: Strive to ensure the active participation of at least 70% of children in targeted villages in regular learning sessions, aiming to progressively increase this engagement to 90-100% over time",
      "Document and Assess Progress: Track progress and assess the impact of the sessions to adapt and improve the educational approach continually."
    ],
    "targetAmount": 1000,
    "startDate": {
      "$date": "2024-01-01T21:00:00.000Z"
    },
    "endDate": {
      "$date": "2025-01-01T21:00:00.000Z"
    },
    "targetAudience": "children"
  },
  "volunteerRequirements": {
    "ageGroup": "20-29",
    "requirementSkills": [
      "college students"
    ]
  },
  "reviewsSent": [],
  "category": {
    "$oid": "659e56be83abe2262ed1cafd"
  },
  "donation": [], */}
    </Box>
    <Typography variant="h6" component="h4" marginBottom={1} marginTop={1}>
      Duration: {details.duration}
    </Typography>
    <Typography variant="h6" component="h4" marginBottom={1} marginTop={1}>
    City: {details.city}
    </Typography>
    <Typography variant="h6" component="h4" marginBottom={1} marginTop={1}>
      
        {console.log('here', details.donation
)}
  City: {/* {details.plan.schedule.map((ele,i)=>{
      return(
        <li key={i}>
        { ele}
        </li>
      )
    })}  */}
    
    </Typography>
    <Button  variant="outlined" size="medium">
         Make a donation
        </Button>
    {/* "plan": {
    "schedule": [
      "friday: teaching math",
      "saturday: teaching science"
    ], */}
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      
        showLabels
        
        
      
      
      
    </Paper>
  </Container>
  )
}

export default Detailed