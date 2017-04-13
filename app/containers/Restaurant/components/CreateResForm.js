import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';

class CreateResForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      restaurantName: "",
      location: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      </form>
    );
  };
}

export default CreateResForm;
