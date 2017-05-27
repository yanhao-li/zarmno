import React from 'react';
import Subheader from 'material-ui/Subheader';
import DishCard from './DishCard';
import Paper from 'material-ui/Paper';
// For Business
import DishAddButton from '../Business/DishAddButton';

const styles = {
  menuPaper: {
    backgroundColor: '#ffffff',
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30,
  },
};

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.auth;
    const { menu } = this.props.restaurant;
    return (
      <Paper className="container" style={styles.menuPaper}>
        <Subheader>Menu</Subheader>
        <ul className="row">
          {menu.map((dish) =>
            (<li key={dish.id}><DishCard dish={dish} {...this.props}></DishCard></li>)
          )}
        </ul>
        {user.role === 'business' && (<DishAddButton {...this.props} />)}
      </Paper>
    );
  }
}

export default Menu;
