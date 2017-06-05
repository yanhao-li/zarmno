import React from 'react';
import Auth from 'containers/Auth';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import CloseIcon from 'material-ui/svg-icons/content/clear';
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
    this.toggleAuthType = this.toggleAuthType.bind(this);
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

  toggleAuthType() {
    if(this.state.authType === "Sign Up"){
      this.setState({
        authType: "Login"
      })
    } else {
      this.setState({
        authType: "Sign Up"
      })
    }
  }

  render() {
    const { modalIsOpen, authType } = this.state;
    return(
      <div>
        <ul className="nav">
          <li className="nav-item"><FlatButton label="SIGN UP" onClick={this.onClickSignUp} backgroundColor="#1E88E5" hoverColor="#0D47A1" style={{color: "white"}} /></li>
          <li className="nav-item"><FlatButton label="LOG IN" onClick={this.onClickLogin} backgroundColor="#EC407A" hoverColor="#AD1457" style={{color: "white"}} /></li>
        </ul>
        <Dialog
          title={authType}
          modal={true}
          open={modalIsOpen}
          onRequestClose={this.closeModal}
          contentStyle={{width: 500}}
        >
          <Auth authType={authType} toggleAuthType={this.toggleAuthType}/>
          <IconButton onClick={this.closeModal} style={{position: "absolute", top: -10, right: -50}}>
            <CloseIcon color="#ffffff"/>
          </IconButton>
        </Dialog>
      </div>
    );
  }
}

export default GuestNav;
