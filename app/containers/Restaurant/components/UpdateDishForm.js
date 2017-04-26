import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';

class UpdateDishModal extends React.PureComponent{
  constructor(props){
    super(props);
    const dish = this.props.dishEditing;
    this.state = {
      errors: "",
      dish: {
        name: dish.name,
        description: dish.description,
        img: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({dish: {
      ...this.state.dish,
      [e.target.name]: e.target.value
    }});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.registerRes(this.state.restaurant).then(
      () => this.props.closeModal()
    );
  }
  render(){
    const { dish, errors } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          className="form-group"
          name="name"
          label="Dish name"
          value={dish.name}
          error={errors}
          onChange={this.onChange}
          type="text"
        />
        <TextFieldGroup
          className="form-group"
          name="Description"
          label="Dish description"
          value={dish.description}
          error={errors}
          onChange={this.onChange}
          type="text"
        />
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
          <button type="button" className="btn btn-danger" onClick={this.props.closeModal}>Delete</button>
          <button type="button" type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
};

export default UpdateDishModal;
