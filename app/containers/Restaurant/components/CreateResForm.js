import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';
import { registerRes } from '../actions';
import { browserHistory } from 'react-router';

class CreateResForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      restaurantName: "",
      location: "",
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}, isLoading: true});
    registerRes(this.state).then(() => {
      this.props.closeModal();
      this.props.fetchRestaurants();
    }, (err) => {
      this.setState({ errors: err.response.data.errors, isLoading: false })
    });
  }

  render(){
    const { errors, restaurantName, location, isLoading } = this.state;

    return(
      <form onSubmit={this.onSubmit}>
        { errors.form && <div className="alert alert-danger">{errors.form}</div> }
        <TextFieldGroup
          className="form-group"
          name="restaurantName"
          label="Restaurant Name"
          value={restaurantName}
          error={errors.restaurantName}
          onChange={this.onChange}
          type="text"
        />
        <TextFieldGroup
          className="form-group"
          name="location"
          label="Location"
          value={location}
          error={errors.location}
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

export default CreateResForm;
