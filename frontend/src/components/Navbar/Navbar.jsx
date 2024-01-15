import * as React from 'react';
import { useContext,useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
const pages = ['Products', 'Pricing', 'Blog'];
function Navbar() {


  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null)
  const {   setToken,
    isLoggedIn,
    setIsLoggedIn, edit} = useContext(tokenContext);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="medium">Name</Button>
        
        <IconButton sx={{ 
          margin:2,}}>
          <SearchIcon />

        </IconButton>
       
      
        <Link href="/dashboard">
        <Button   sx={{ 
          margin:2,
          flex: 1 }} variant="outlined" size="medium">
          initiatives
        </Button></Link>
        {isLoggedIn?<>
          
         </>:<> 
        <Link href="/register">
        <Button  variant="outlined" size="medium">
          Sign up
        </Button></Link>
        <Link href="/login">
        <Button   sx={{ 
          margin:2,
          flex: 1 }} variant="outlined" size="medium">
          Sign In
        </Button></Link></>}
        {isLoggedIn?<><IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center">Donate</Typography>
                </MenuItem>
                <Link href="/dashboard">
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  
            localStorage.clear()
            
          }} >
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
                </Link>

                
             
            </Menu></>:<></>}
        
      </Toolbar>
    
    </React.Fragment>
  );
}


export default Navbar;