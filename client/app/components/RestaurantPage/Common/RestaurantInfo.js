import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  restaurant: PropTypes.object.isRequired,
};

const RestaurantInfoDiv = styled.div`
  padding: 30px;
`;

class RestaurantInfo extends React.PureComponent {

  render() {
    const { restaurant } = this.props;
    const { info } = restaurant;
    return (
      <RestaurantInfoDiv className="col">
        <h1 className="display-4">{info.name}</h1>
        <h3 className="text-muted">{info.location}</h3>
        { info.description
          ?
          (<p className="lead">{info.description}</p>)
          :
          (<p className="lead">This restaurant has not added information yet</p>)
        }
      </RestaurantInfoDiv>
    );
  }
}

RestaurantInfo.propTypes = propTypes;

export default RestaurantInfo;
