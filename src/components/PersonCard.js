import React, { Component, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { BsPersonCircle } from "react-icons/bs";
export class PersonCard extends Component {
  // const [datas, setDatas]=useState([])
  handleDelete = (dataId) => {
    console.log('Data silindi:', dataId);
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  artir = () => {
    this.setState({ count: this.state.count + 1 });
  };

  azalt = () => {
    this.setState({ count: this.state.count - 1 });
  };
  sifirla = () => {
    this.setState({ count: this.state.count = 0 });
  };
  render() {
    return (

<>
{/* <Button onClick={()=>{
    let sortedDatas=[...datas.sort((a,b)=>a.age-b.age)]
    setDatas(sortedDatas)
}}>
SORTED Age
</Button> */}
 
<Card  >
< BsPersonCircle style={{fontSize:"20px"}}/> 
      <CardMedia
        sx={{ height: 140 }}
        image={this.props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.props.surname}
        </Typography>
        <Typography variant="body3" color="text.secondary">
        {this.props.age}
        </Typography>
      </CardContent>
        <Button onClick={() => this.handleDelete(this.props.id)} variant="contained">Delete</Button>
     <div style={{marginTop:"50px", display:"flex", justifyContent:"space-around"}}>
        <span style={{fontSize:"30px"}}>{this.state.count}</span>
        <Button variant="contained"  onClick={this.artir}>Artır</Button>
        <Button variant="contained" onClick={this.azalt}>Azalt</Button>
        <Button variant="contained" onClick={this.sifirla}>Sifirla</Button>
      </div>
    </Card>



</>    )
  }
}

export default PersonCard
PersonCard.propTypes={
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age:PropTypes.number,
  image:PropTypes.string.isRequired
}
// Person.propTypes={
//   persons: PropTypes.string.isRequired
// }