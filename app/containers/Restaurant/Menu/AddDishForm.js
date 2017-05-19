import React from 'react';
import TextFieldGroup from 'components/TextFieldGroup';
import { addDish } from 'actions/RestaurantActions';
import { connect } from 'react-redux';

class AddDishForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: "",
      dish: {
        resId: this.props.currentRes.info.id,
        name: "",
        description: "",
        img: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  onChange(e) {
    this.setState({dish: {
      ...this.state.dish,
      [e.target.name]: e.target.value
    }});
  }

  saveChanges(e){
    const { dish } = this.state;
    e.preventDefault();
    this.props.addDish(dish).then(
      this.props.closeModal
    );
  }

  render(){
    const { dish, errors } = this.state;
    return(
      <form>
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
          name="description"
          label="Dish description"
          value={dish.description}
          error={errors}
          onChange={this.onChange}
          type="text"
        />
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
          <button type="button" type="submit" className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
        </div>
      </form>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentRes: state.get('currentRes')
  }
}

export default connect(mapStateToProps, { addDish })(AddDishForm);
