import React from 'react';
import { browserHistory } from 'react-router';
import TextFieldGroup from 'components/common/TextFieldGroup';

class InitResForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      restaurantName: '',
      location: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({errors: {}, isLoading: true});
    this.props.registerRes(this.state).then(
      () => {
        browserHistory.push('/menu');
      }, (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    );
  }

  render(){
    const { errors, restaurantName, location, isLoading } = this.state;

    return(
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          className="form-group"
          name="restaurantName"
          label="Restaurant Name"
          value={this.state.restaurantName}
          error={errors.restaurantName}
          onChange={this.onChange}
          type="text"
        />

        <TextFieldGroup
          className="form-group"
          name="location"
          label="Location"
          value={this.state.location}
          error={errors.location}
          onChange={this.onChange}
          type="text"
        />

        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary">
                Get Started
          </button>
        </div>
      </form>
    );
  }
}

InitResForm.propTypes = {
  registerRes: React.PropTypes.func.isRequired,
};

export default InitResForm;
