import React from 'react';
import Subheader from 'material-ui/Subheader';
import DishCard from 'containers/Restaurant/Common/DishCard';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  menuPaper: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30
  }
}

const FloatingAddBottom = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`

class Menu extends React.PureComponent{
  render(){
    const { menu } = this.props.restaurant;
    return (
      <Paper className="container" style={styles.menuPaper}>
        <Subheader>Menu</Subheader>
        <ul className="row">
          {menu.map(dish =>
            (<li key={dish.id}><DishCard dish={dish}></DishCard></li>)
          )}
        </ul>
        <FloatingAddBottom>
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </FloatingAddBottom>
      </Paper>
    );
  }
}

export default Menu;
