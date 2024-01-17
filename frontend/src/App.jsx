import { useState, createContext } from "react";
import {
  jsxDEV as _jsxDEV,
  Fragment as _Fragment,
} from "react/jsx-dev-runtime";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashbored/Dashored";
import Detailed from "./components/Detailed/Detailed";

import Profile from"./components/profile/Profile"
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container, Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Create from "./components/CreateIn/CreateIn";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        www.Jood.org.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const tokenContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [allInitiative, setAllInitiative] = useState([]);
  const [edit, setEdit] = useState(localStorage.getItem("edit") || "")
const [id, setId] = useState(localStorage.getItem("id") || "")

const [userId, setUserId] = useState(localStorage.getItem("userId") || "")
  return (
    <div className="all">
      <tokenContext.Provider 
        value={{edit,
          setEdit,
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          allInitiative,
          setAllInitiative,
          setId ,
          userId, setUserId
        }}
      >
        <Navbar />
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/initiativeDetails/:id"
            element={
              <Detailed />
            }
          />
           <Route
            path="/main"
            element={
              <Main />
            }
          />
           <Route
            path="/profile"
            element={
              <Profile />
            }
          />
           <Route
            path="/createNewInitiative"
            element={
              <Create />
            }
          />
        </Routes>
       
        
{/* Footer */}
<Box sx={{ bgcolor: 'background.paper', p: 6 , border: 3, borderColor: 'divider'}} component="footer">
  <Container sx={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr "}}>
<Box align="center"><img style={{width:"50%",height:"60%",margin:"8px"}}
        src="https://i.imgur.com/34F1rTZ.png" alt="" />
        <Typography
        variant="h6"
        align="center"
        color="#155fa0"
        component="p"
        gutterBottom
      >
        Something here to give the footer a purpose!
      </Typography></Box>
      <Box align="center">
        <Typography
        variant="h6"
        align="center"
        color="#155fa0"
        component="p"
        gutterBottom
      >
        <Stack direction="row" spacing={3}>
    
      <HomeIcon color="primary" />
     
    </Stack>
        
      </Typography></Box>
  </Container>
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
      <Copyright  />
    </Box>

      </tokenContext.Provider>
    </div>
  );
}

export default App;
