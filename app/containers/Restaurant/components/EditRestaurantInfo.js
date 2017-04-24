import React from 'react';
import InfoForm from './InfoForm';

class EditRestaurantInfo extends React.PureComponent{
  render(){
    const { restaurant } = this.props;
    return(
      <div>
        <InfoForm restaurant={restaurant} name="name" title="Restaurant Name" data={restaurant.info.name}/>
        <InfoForm restaurant={restaurant} name="location" title="Location" data={restaurant.info.location}/>
        <InfoForm restaurant={restaurant} name= "info" title="Info" data={ restaurant.info.info ? restaurant.info.info : "This restaurant hasn't added information yet"}/>
      </div>
    );
  }
};

export default EditRestaurantInfo;
