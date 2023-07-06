import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
export class PersonCard extends Component {
  handleDelete = (dataId) => {
    console.log('Data silindi:', dataId);
  };
  render() {
    return (

<>
<Card  >
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