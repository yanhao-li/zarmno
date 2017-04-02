import React from 'react';
import styled from 'styled-components';
import CreateMenuForm from './CreateMenuForm';
import { connect } from 'react-redux';
import { addDishes } from './actions'

const MenuDiv = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
`

class MenuPage extends React.PureComponent {
  render(){
    return(
      <MenuDiv className="row">
        <CreateMenuForm addDishes={this.props.addDishes} />
      </MenuDiv>
    );
  }
}

MenuPage.propTypes = {
  addDishes: React.PropTypes.func.isRequired,
}

export default connect(null, { addDishes })(MenuPage);
