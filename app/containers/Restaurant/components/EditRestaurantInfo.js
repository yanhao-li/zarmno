import React from 'react';
import InfoForm from './InfoForm';

class EditRestaurantInfo extends React.PureComponent{
  render(){
    const { info } = this.props;
    return(
      <div>
        <InfoForm info={info} name="name" title="Restaurant Name" data={info.name}/>
        <InfoForm info={info} name="location" title="Location" data={info.location}/>
        <InfoForm info={info} name= "description" title="Description" data={ info.description ? info.description : "This restaurant hasn't added description yet"}/>
      </div>
    );
  }
};

export default EditRestaurantInfo;
