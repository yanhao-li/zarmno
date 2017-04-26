import React from 'react';
import ModifyBtn from './ModifyBtn';

class MenuItem extends React.PureComponent{
  render(){
    const {dish} = this.props;
    return(
        <li>
          {dish.name}<ModifyBtn onClick={this.props.openModal}/>
        </li>
    );
  }
};

export default MenuItem;
