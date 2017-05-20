import React from 'react';
import ModifyButton from '../components/ModifyButton';

class DishEdit extends React.PureComponent{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.openModal();
    this.props.setDishEditing(this.props.dish);
  }

  render(){
    const {dish} = this.props;
    return(
        <li>
          {dish.name}<ModifyButton onClick={this.onClick}/>
        </li>
    );
  }
};

export default DishEdit;
