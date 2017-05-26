import React from 'react';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import DishCard from 'containers/Restaurant/Common/DishCard';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const styles = {
  menuPaper: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30
  }
}


class Menu extends React.PureComponent{
  render(){
    const { menu } = this.props.restaurant;
    return (
      <Paper className="container" style={styles.menuPaper}>
        <Subheader>Menu</Subheader>
        <ul className="row">
          {menu.map(dish =>
            (<li key={dish.id}><Link><DishCard dish={dish}></DishCard></Link></li>)
          )}
        </ul>
      </Paper>
    );
  }
}

export default Menu;
