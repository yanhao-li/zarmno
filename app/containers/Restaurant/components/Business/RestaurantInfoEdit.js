import React from 'react';
import TextField from 'material-ui/TextField';
import { updateResInfo } from 'actions/RestaurantActions';


class RestaurantInfoEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    const { info } = this.props.restaurant;
    this.state = {
      fieldsValue: {
        name: info.name,
        location: info.location,
        description: info.description,
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      fieldsValue: {
        ...this.state.fieldsValue,
        [e.target.name]: e.target.value,
      },
    });
  }

  saveChanges = (e) => {
    const { restaurant, dispatch } = this.props;
    const { info } = restaurant;
    e.preventDefault();
    dispatch(updateResInfo(info.id, this.state.fieldsValue));
    this.props.cancelEdit();
  }


  render() {
    const { restaurant } = this.props;
    const { info } = restaurant;
    return (
      <div style={{ padding: 20 }}>
        <TextField
          id="text-field-controlled"
          value={this.state.fieldsValue.name}
          name="name"
          floatingLabelText="Restaurant Name"
          onChange={this.handleChange}
        />
        <TextField
          id="text-field-controlled"
          value={this.state.fieldsValue.location}
          name="location"
          floatingLabelText="Restaurant Location"
          onChange={this.handleChange}
        />
        <TextField
          id="text-field-controlled"
          value={this.state.fieldsValue.description}
          name="description"
          floatingLabelText="Restaurant Description"
          onChange={this.handleChange}
        />
        <div>
          <button className="btn btn-secondary" onClick={this.saveChanges} style={{ marginTop: '10px' }}>Save</button>
          <button className="btn btn-secondary" onClick={this.props.cancelEdit} style={{ margin: '10px 0 0 10px' }}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default RestaurantInfoEdit;
