import React from 'react';

class ModifyButton extends React.PureComponent{
  render(){
    return(
      <button onClick={this.props.onClick} className="btn btn-outline-secondary btn-sm">
        Modify
      </button>
    );
  }
}

export default ModifyButton;
