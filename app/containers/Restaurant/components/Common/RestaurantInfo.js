import React from 'react';
import styled from 'styled-components';

const RestaurantInfoDiv = styled.div`
  padding: 30px;
`

class RestaurantInfo extends React.PureComponent{

  render(){
    const { restaurant } = this.props;
    const { info } = restaurant;
    return(
      <RestaurantInfoDiv className="col">
        <h1 className="display-4">{info.name}</h1>
        <h3 className="text-muted">{info.location}</h3>
        { info.description ? <p className="lead">{info.description}</p> : <p className="lead">This restaurant hasn't added information yet</p>}
      </RestaurantInfoDiv>
    );
  }
};

export default RestaurantInfo;
