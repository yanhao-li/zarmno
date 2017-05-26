import React from 'react';
import Subheader from 'material-ui/Subheader';
import DishCard from './DishCard';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
//For Business
import DishUpdateForm from '../Business/DishUpdateForm';
import DishAddButton from '../Business/DishAddButton'

const styles = {
  menuPaper: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30
  },
}

class Menu extends React.PureComponent{
  render(){
    const { user } = this.props.auth;
    const { menu } = this.props.restaurant;
    return (
      <Paper className="container" style={styles.menuPaper}>
        <Subheader>Menu</Subheader>
        <ul className="row">
          {menu.map(dish =>
            (<li key={dish.id}><DishCard dish={dish}></DishCard></li>)
          )}
        </ul>
        {user.role === "business" && (<DishAddButton />)}
      </Paper>
    );
  }
}

export default Menu;
