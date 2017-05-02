import React from 'react';
import ModifyBtn from './ModifyBtn';

class MenuItem extends React.PureComponent{
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
          {dish.name}<ModifyBtn onClick={this.onClick}/>
        </li>
    );
  }
};

export default MenuItem;
