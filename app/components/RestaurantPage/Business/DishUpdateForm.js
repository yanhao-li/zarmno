import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from 'components/TextFieldGroup';
import { updateDish, deleteDish } from 'actions/RestaurantActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequird,
  dishEditing: PropTypes.object.isRequird,
};

class DishUpdateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    const dish = this.props.dishEditing;
    this.state = {
      errors: '',
      dish: {
        id: dish.id,
        name: dish.name,
        description: dish.description,
        img: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
  }

  onChange(e) {
    this.setState({ dish: {
      ...this.state.dish,
      [e.target.name]: e.target.value,
    } });
  }

  deleteDish(e) {
    const { dish } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(deleteDish(dish));
    this.props.closeModal();
  }

  saveChanges(e) {
    const { dish } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(updateDish(dish));
    this.props.closeModal();
  }

  render() {
    const { dish, errors } = this.state;
    return (
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
          name="Description"
          label="Dish description"
          value={dish.description}
          error={errors}
          onChange={this.onChange}
          type="text"
        />
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>Close</button>
          <button type="button" className="btn btn-danger" onClick={this.deleteDish}>Delete</button>
          <button type="submit" className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
        </div>
      </form>
    );
  }
}

DishUpdateForm.propTypes = propTypes;

export default DishUpdateForm;
