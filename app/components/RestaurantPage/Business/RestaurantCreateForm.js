import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const propTypes = {
  registerRes: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

class RestaurantCreateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      restaurant: {
        name: '',
        location: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ restaurant: {
      ...this.state.restaurant,
      [e.target.name]: e.target.value,
    } });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.registerRes(this.state.restaurant);
  }

  render() {
    const { errors, restaurant } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          className="form-group"
          name="name"
          label="Restaurant Name"
          value={restaurant.name}
          errorText={errors}
          onChange={this.onChange}
          type="text"
        />
        <TextField
          className="form-group"
          name="location"
          label="Location"
          value={restaurant.location}
          errorText={errors}
          onChange={this.onChange}
          type="text"
        />
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

RestaurantCreateForm.propTypes = propTypes;

export default RestaurantCreateForm;
