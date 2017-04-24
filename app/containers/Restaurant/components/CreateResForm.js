import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';
import { registerRes, addRestaurant } from '../actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class CreateResForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: {
        restaurant: {
          name: '',
          location: ''
        },
      },
      restaurant: {
        name: '',
        location: ''
      },
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({restaurant: {
      ...this.state.restaurant,
      [e.target.name]: e.target.value
    }});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {restaurant: {}}, isLoading: true});
    registerRes(this.state.restaurant).then((res) => {
      this.props.onAddNewRes(res.data.restaurant);
      this.props.closeModal();
    }, (err) => {
      this.setState({ errors: err.response.data.errors, isLoading: false })
    });
  }

  render(){
    const { errors, restaurant, isLoading } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        { errors.form && <div className="alert alert-danger">{errors.form}</div> }
        <TextFieldGroup
          className="form-group"
          name="name"
          label="Restaurant Name"
          value={restaurant.name}
          error={errors.restaurant.name}
          onChange={this.onChange}
          type="text"
        />
        <TextFieldGroup
          className="form-group"
          name="location"
          label="Location"
          value={restaurant.location}
          error={errors.restaurant.location}
          onChange={this.onChange}
          type="text"
        />
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
          <button type="button" type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewRes: (restaurant) => {
      dispatch(addRestaurant(restaurant));
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateResForm);
