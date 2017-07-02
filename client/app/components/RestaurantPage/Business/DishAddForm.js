import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { addDish } from 'actions/RestaurantActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
};

class DishAddForm extends React.PureComponent {
  constructor(props) {
    super(props);
    const { restaurant } = this.props;
    this.state = {
      errors: '',
      dish: {
        resId: restaurant.info.id,
        name: '',
        description: '',
        img: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleChange(e) {
    this.setState({ dish: {
      ...this.state.dish,
      [e.target.name]: e.target.value,
    } });
  }

  saveChanges(e) {
    const { dish } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(addDish(dish));
    this.props.closeModal();
  }

  render() {
    const { dish } = this.state;
    return (
      <div>
        <TextField
          name="name"
          floatingLabelText="Dish Name"
          floatingLabelFixed
          onChange={this.handleChange}
          value={dish.name}
        />
        <br />
        <TextField
          name="description"
          floatingLabelText="Dish description"
          floatingLabelFixed
          onChange={this.handleChange}
          value={dish.description}
        />
        <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
          <FlatButton onClick={this.props.closeModal}>Close</FlatButton>
          <FlatButton onClick={this.saveChanges} primary>Save</FlatButton>
        </div>
      </div>
    );
  }
}

DishAddForm.propTypes = propTypes;

export default DishAddForm;
