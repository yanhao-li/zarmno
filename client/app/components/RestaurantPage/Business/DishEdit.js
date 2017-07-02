import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  openModal: PropTypes.func.isRequired,
  dish: PropTypes.object.isRequired,
  setDishEditing: PropTypes.object.isRequired,
};

class DishEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.openModal();
    this.props.setDishEditing(this.props.dish);
  }

  render() {
    const { dish } = this.props;
    return (
      <li>
        {dish.name}
      </li>
    );
  }
}

DishEdit.propTypes = propTypes;

export default DishEdit;
