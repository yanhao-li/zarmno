import React from 'react';
import Auth from 'containers/Auth';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class GuestNav extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      modalIsOpen: false,
      authType: "Sign Up"
    };
    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onClickSignUp(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
      authType: "Sign Up"
    })
  }

  onClickLogin(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
      authType: "Login"
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    const { modalIsOpen, authType } = this.state;
    return(
      <div>
        <ul className="nav">
          <li className="nav-item"><FlatButton label="SIGN UP" onTouchTap={this.onClickSignUp} backgroundColor="#1E88E5" hoverColor="#0D47A1" style={{color: "white"}} /></li>
          <li className="nav-item"><FlatButton label="LOG IN" onTouchTap={this.onClickLogin} backgroundColor="#EC407A" hoverColor="#AD1457" style={{color: "white"}} /></li>
        </ul>
        <Dialog
          title={authType}
          modal={false}
          open={modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <Auth authType={authType}/>
        </Dialog>
      </div>
    );
  }
}

export default GuestNav;
