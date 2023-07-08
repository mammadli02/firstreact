import React, { Component,useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PersonCard from '../components/PersonCard';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BsBrowserSafari,BsFillBasketFill } from "react-icons/bs";

export class Person extends Component {

  static defaultProps={
    persons:[]
  }
  render() {
    return (
<>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
            <BsFillBasketFill style={{fontSize:"30px"}}/> <span style={{fontSize:"20px", marginLeft:"10px"}}>Count</span>

          <Button style={{marginLeft:"20px"}}
          color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
          < BsBrowserSafari style={{fontSize:"50px", color: "blue"}}/>
<Container maxWidth="lg" style={{marginTop:"50px"}}>
<Grid container spacing={2}>
{this.props.persons?.map((person,index)=>(
         
        <Grid item lg={4} md={6}  sm={12} key={"person" + index}>
<PersonCard 

{...person}/>

</Grid>

))}
        </Grid>
       

</Container>

</>   
 )
  }
}


// Person.propTypes={
//   persons: PropTypes.string.isRequired
// }