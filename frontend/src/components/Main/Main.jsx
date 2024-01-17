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

<ImageList 
      sx={{m:2, width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img style={{}}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

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



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Burger',
  },
  {
    img: 'https://i.pinimg.com/564x/cb/74/59/cb7459d3a1bcea5cdae12284f4ae235e.jpg',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1507427254987-7be33d0321d3?q=80&w=370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
/*   {
    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  }, */
  {
    img: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80&w=570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  }, {
    img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Coffee',
    cols: 2,
  },
 
];
export default Main;