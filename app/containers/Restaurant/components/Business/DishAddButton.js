import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import DishAddForm from './DishAddForm';

const DishAddButtonStyle = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`

class DishAddButton extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onClickAddBtn = this.onClickAddBtn.bind(this);
  }

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
    return(
      <DishAddButtonStyle>
        <FloatingActionButton onTouchTap={this.onClickAddBtn}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add New Dish"
          modal={false}
          open={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <DishAddForm closeModal={this.closeModal} {...this.props}/>
        </Dialog>
      </DishAddButtonStyle>
    )
  }
}

export default DishAddButton;
