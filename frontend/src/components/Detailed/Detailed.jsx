import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect,useState,useContext}from 'react'
import { tokenContext } from '../../App';
import { Routes, Route, useParams } from "react-router-dom";
import axios from 'axios';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




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

const defaultTheme = createTheme();
const Detailed = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const [plan, setPlan] = useState([])
  const [schedule, setSchedule] = useState([])
  const [duties, setDuties] = useState([])
  const [vol, setVol] = useState({})
  const [volReq, setVolReq] = useState([])
  const [review, setReview] = useState([])
  const [editClick, setEditClick] = useState(false)
  const [donate, setDonate] = useState(false)
  const [donateAmount, setDonateAmount] = useState("")

const [updatedInfo, setUpdatedInfo] = useState({})
const [message, setMessage] = useState("")
const [messageShow, setMessageShow] = useState(false)
const [newReview, setNewReview] = useState({})

  const HandelRender = () => {
    axios
      .get(`http://localhost:5000/initiative/${id}`)
      .then((res) => {
      setDetails(res.data.initiative)
      setPlan(res.data.initiative.plan)
      setDuties(res.data.initiative.plan.listOfDuties)
      setSchedule(res.data.initiative.plan.schedule)
      setVol(res.data.initiative.volunteerRequirements)
      setReview(res.data.initiative.reviewsSent)
      
      setVolReq(res.data.initiative.volunteerRequirements.requirementSkills)
      })
    
      .catch((err) => {
      
        console.log("err", err);
      });
  };

  useEffect(() => {
    HandelRender();
  }, []);
    const {edit} =useContext(tokenContext)
   
  return (
    <ThemeProvider theme={defaultTheme}>
    
    
    <main>
      {/* Hero unit */}
      
        <Container sx={{justifyContent:"center"}}  maxWidth="lg">
        <Grid item sx={{justifyItems:"center"}} >
              <Card 
                sx={{ margin:"auto", pt:5, width:"80%",height: '60%', display: 'flex', flexDirection: 'column' ,alignSelf:"center" }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    width:"100%",
                    height:"100%",
                    pt: '56.25%',
                  }}
                  image={details.img}
                />
                <CardContent  sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="bold" gutterBottom variant="h5" component="h2">
                   {details.name}
                  </Typography>
                  <Typography fontSize= "large" component="h2" sx={{ pt:2 }}>
                  {details.description}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 City: {details.city}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Duration: {details.duration}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                  Target Audience: {plan.targetAudience}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 End Date: {plan.endDate}<br/>
                 Start Date: {plan.startDate}
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Target Amount: {plan.targetAmount} JOD
                 </Typography>

                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Current Amount: {details.currentAmount} JOD
                  </Typography>
                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                  Volunteer Limit: {details.volunteerLimit} 
                 </Typography>
                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Volunteer Requirements:{/* currentAmount */}
                 </Typography>
                 
                 <Typography component="h2" fontSize= "large" fontWeight="" >
                 Age Group: {vol.ageGroup} <br/>
                 Skills: {volReq.map((ele,i)=>{
                  return <div key={i}>{ele}</div>
                 })}
                     
                  
                 </Typography>

                  <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 Duties:{/* currentAmount */}
                 </Typography>
                 
                 <Typography component="h2" fontSize= "large" fontWeight="" >
                 <ul>
                  {duties.map((ele,i)=>{
                    return <li  key={i}>{ele}</li>
                  })}
                 </ul>
                 </Typography>
                 

                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{ pt:2 }}>
                 schedule:
                 </Typography>
                 <Typography component="h2" fontSize= "large" fontWeight="" >
                 <ul>
                  {schedule.map((ele,i)=>{
                    return <li  key={i}>{ele}</li>
                  })}
                 </ul>
                 </Typography>
                 
                 <Typography component="h2" fontSize= "large" fontWeight="bold" sx={{  
                  pt:2 }}>
                 Reviews:
                 </Typography>
                 {review.length===0?<>
                  Be first to give us your review
                  </>:<> <Typography sx={{
                  pt:2 }} component="h2" fontSize= "large" fontWeight="" >
                  
                  

                    {review.map((ele,i)=>{
                     return <div key={i}>
                      <Typography  component="h2" fontSize= "large" fontWeight="bold" sx={{  borderBottom: 1, borderColor: 'divider',
                  pt:2 }}>
                      {ele.reviewer.firstName} {ele.reviewer.lastName}
                 </Typography>
                       {ele.review}</div>
                   })} 
                  
                  </Typography></>}
                  <TextField
           onChange={(e)=>{

            setNewReview({...newReview,review:e.target.value})
          }}
          id="standard-disabled"
          label="Write Your Review Here"
          
          variant="standard"
        /><br/>{/* http://localhost:5000/initiative/65a1b7e683eb6f048f47adec/review */}
                  <Button  onClick={()=>{
   
   console.log('new', newReview)

   axios.post(`http://localhost:5000/initiative/${id}/review`,newReview,{
     headers: {
       authorization: `Bearer ${localStorage.getItem("token")}`,
     },
   }).then((res)=>{
    console.log('first', res.data.review.review)
    // setReview([...review,res.data.review]) 
       console.log('res', res.data.review)
   }).catch((err)=>{
       console.log('err', err)
   })
     
   }} size="small" sx={{ mt:2 }}variant="outlined">Add Review</Button>
                </CardContent>
               
              </Card>

            </Grid>
          
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button onClick={()=>{
              setEditClick(false)
              setDonate(true)
            }} variant="contained">Donate</Button>
            <Button variant="outlined">Volunteer</Button>
            {edit==="659e5291d2f8fba730f39707"?<Button onClick={()=>{
              setEditClick(true)
              setDonate(false)
            }} variant="outlined">Edit</Button>:<></>}<br/>

             
          </Stack>
          {editClick?<>
              <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
    >
      
      <div>
        <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,name:e.target.value})
          }}
          id="standard-required"
          label="Name"
         
          variant="standard"
        />
        <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,description:e.target.value})
          }}
          id="standard-disabled"
          label="description"
         
          variant="standard"
        />
         <TextField
           onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,duration:e.target.value})
          }}
          id="standard-disabled"
          label="duration"
         
          variant="standard"
        />
         <TextField
          onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,city:e.target.value})
          }}
          id="standard-disabled"
          label="city"
        
          variant="standard"
        />
          <TextField
            onChange={(e)=>{
              setUpdatedInfo({...updatedInfo,currentAmount:e.target.value})
            }}
          id="standard-disabled"
          label="currentAmount"
         
          variant="standard"
        />
          <TextField
           onChange={(e)=>{
            setUpdatedInfo({...updatedInfo,volunteerLimit:e.target.value})
          }}
          id="standard-disabled"
          label="volunteerLimit"
          
          variant="standard"
        /><br/>
       <Button onClick={()=>{
   
   

        axios.put(`http://localhost:5000/initiative/${id}`,updatedInfo).then((res)=>{
          setDetails(res.data.initiative)
            console.log('res', res.data.initiative)
        }).catch((err)=>{
            console.log('err', err)

        })
        setEditClick(false)  
        }} sx={{  
                  mt:2 }} variant="contained">Done</Button>
      </div>
    </Box>
            </>:<></>}
            {donate?<>
              <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
    >
      <div>
      <TextField
           onChange={(e)=>{
            setDonateAmount({amount:e.target.value})
          }}
          id="standard-disabled"
          label="Amount"
          
          variant="standard"
        /><br/>
       <Button onClick={()=>{
   
   

        axios.post(`http://localhost:5000/initiative/${id}/donation`,donateAmount,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res)=>{
          setMessage(res.data.message)
          setMessageShow(true)
            console.log('res', res.data.message)
        }).catch((err)=>{
            console.log('err', err)
        })
          
        }} sx={{  
                  mt:2 }} variant="contained">Done</Button>

{messageShow?<><Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {message}
      </Typography></>:<></>}
      </div>
    </Box>

            </>:<>
            
            
            </>}
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
  )
}

export default Detailed