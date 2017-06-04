import React from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import DishCard from 'components/Card/DishCard';
// For Business
import DishAddButton from '../Business/DishAddButton';

const propTypes = {
  auth: PropTypes.object.isRequired,
  restaurant: PropTypes.object.isRequired,
};

const styles = {
  menuPaper: {
    backgroundColor: '#ffffff',
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30,
  },
};

class Menu extends React.PureComponent {
  render() {
    const { auth, restaurant } = this.props;
    const { user } = auth;
    const { menu } = restaurant;
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

Menu.propTypes = propTypes;

export default Menu;
