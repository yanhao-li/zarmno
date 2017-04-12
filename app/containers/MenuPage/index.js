import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CreateMenuForm from './CreateMenuForm';
import { addDishes } from './actions';

const MenuDiv = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
`;

const MenuPage = () => (
  <MenuDiv className="row">
    <CreateMenuForm addDishes={this.props.addDishes} />
  </MenuDiv>
  );

// MenuPage.propTypes = {
//   addDishes: React.PropTypes.func.isRequired,
// };

export default connect(null, { addDishes })(MenuPage);
