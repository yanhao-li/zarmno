import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';
import { registerRes } from 'actions/RestaurantActions';
import { connect } from 'react-redux';

class RestaurantCreateForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: "",
      restaurant: {
        name: '',
        location: ''
      }
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
    this.props.registerRes(this.state.restaurant);
  }

  render(){
    const {errors, restaurant} = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          className="form-group"
          name="name"
          label="Restaurant Name"
          value={restaurant.name}
          error={errors}
          onChange={this.onChange}
          type="text"
        />
        <TextFieldGroup
          className="form-group"
          name="location"
          label="Location"
          value={restaurant.location}
          error={errors}
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


export default connect(null, { registerRes })(RestaurantCreateForm);
