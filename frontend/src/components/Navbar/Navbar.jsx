import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {


  
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="medium">Name</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          
        </Typography>
        <IconButton sx={{ 
          margin:2,}}>
          <SearchIcon />
        </IconButton>
        <Link href="/register">
        <Button  variant="outlined" size="medium">
          Sign up
        </Button></Link>
        <Link href="/login">
        <Button   sx={{ 
          margin:2,
          flex: 1 }} variant="outlined" size="medium">
          Sign In
        </Button></Link>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      
       {/*    <Link
            color="inherit"
            noWrap
            
            variant="body2"
            
            sx={{ p: 1, flexShrink: 0 }}
          >
          <Button size="small"></Button>
          </Link> */}
       
      </Toolbar>
    </React.Fragment>
  );
}


export default Navbar;