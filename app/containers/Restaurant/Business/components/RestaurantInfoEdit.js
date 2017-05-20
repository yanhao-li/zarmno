import React from 'react';
import InfoForm from './InfoForm';

class RestaurantInfoEdit extends React.PureComponent{
  render(){
    const { info } = this.props.restaurant;
    return(
      <div>
        <InfoForm name="name" title="Restaurant Name" data={info.name} {...this.props}/>
        <InfoForm name="location" title="Location" data={info.location} {...this.props}/>
        <InfoForm name= "description" title="Description" data={ info.description ? info.description : "This restaurant hasn't added description yet"} {...this.props}/>
      </div>
    );
  }
};

export default RestaurantInfoEdit;
