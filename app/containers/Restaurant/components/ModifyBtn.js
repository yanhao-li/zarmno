import React from 'react';

class ModifyBtn extends React.PureComponent{
  render(){
    return(
      <button onClick={this.props.onClick} className="btn btn-outline-secondary btn-sm">
        Modify
      </button>
    );
  }
}

export default ModifyBtn;
