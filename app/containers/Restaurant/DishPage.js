import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

class DishPage extends React.PureComponent{
  render(){
    const {dish, restaurant} = this.props;
    return(
      <Card style={{minHeight: 1000}}>
        <IconButton style={{position: 'absolute', right: 30, top: 30}} onTouchTap={this.props.closeModal}>
          <Close />
        </IconButton>
        <CardHeader
          title={restaurant.name}
          subtitle={restaurant.location}
          avatar="https://media.timeout.com/images/100666581/image.jpg"
        />
        <CardMedia
          mediaStyle={{height: 500, overflow: 'hidden'}}
        >
          <img src="https://s3-media4.fl.yelpcdn.com/bphoto/kYZOjS_Vd8R88qTYYU3aYQ/l.jpg" height={500}/>
        </CardMedia>
        <CardTitle title={dish.name} subtitle={dish.description} />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default DishPage;
