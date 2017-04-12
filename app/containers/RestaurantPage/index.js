import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import InitResForm from './InitResForm';
import { registerRes } from './actions';

const ResPage = styled.div`
    box-sizing: border-box;
    padding-top: 60px;
`;

const RestaurantPage = () => (
  <ResPage className="container">
    <InitResForm className="col-md-4" registerRes={this.props.registerRes} />
  </ResPage>
  );

RestaurantPage.propTypes = {
  // registerRes: React.PropTypes.func.isRequired,
};

export default connect(null, { registerRes })(RestaurantPage);
