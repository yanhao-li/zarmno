import React from 'react';
import Subheader from 'material-ui/Subheader';
import DishCard from './DishCard';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
//For Business
import DishUpdateForm from '../Business/DishUpdateForm';
import DishAddButton from '../Business/DishAddButton'

const styles = {
  menuPaper: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 30
  },
}

class Menu extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      dishViewing: undefined,
      modalIsOpen: false,
      business: {
        modalAction: undefined,
      },
      customer: {
        isFavorite: false
      }
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onClickAddBtn = this.onClickAddBtn.bind(this);
  };

  openModal(){
    this.setState({
      modalIsOpen: true
    });
  }

  onClickAddBtn(){
    this.setState({
      modalAction: 'add'
    })
    this.openModal();
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }


  render(){
    const { menu } = this.props.restaurant;
    return (
      <Paper className="container" style={styles.menuPaper}>
        <Subheader>Menu</Subheader>
        <ul className="row">
          {menu.map(dish =>
            (<li key={dish.id}><DishCard dish={dish}></DishCard></li>)
          )}
        </ul>
        <DishAddButton />
        <Dialog
          title="title"
          modal={false}
          open={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >

        </Dialog>
      </Paper>
    );
  }
}

export default Menu;
