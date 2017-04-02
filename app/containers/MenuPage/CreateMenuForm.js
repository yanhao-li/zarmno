import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const MdlCard = styled.div`
  margin: 10px;
`

class CreateMenuForm extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      dishesName: '',
      dishesDescription: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
      e.preventDefault();
      this.setState({ errors: {}, isLoading: true });
      this.props.addDishes(this.state).then(
        () => {
          browserHistory.push('/menu');
        }, (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }

  render(){

    const { errors, dishesName, dishesDescription, isLoading } = this.state;

    return(
      <div className="col-md-3">
        <MdlCard className="card">
            <form className="form-group" onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Add dishes</span>
                <div className="input-field">
                  <i className="material-icons prefix">view_headline</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    name="dishesName"
                    onChange={this.onChange}
                    value={this.state.dishesName}
                    className="validate" />
                  <label htmlFor="icon_prefix">Dishes Name</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">description</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    name="dishesDescription"
                    onChange={this.onChange}
                    value={this.state.dishesDescription}
                    className="validate" />
                  <label htmlFor="icon_prefix">Description</label>
                </div>
              </div>
              <div className="card-action">
                  <button className="blue white-text btn" type="submit">Create</button>
              </div>
            </form>
        </MdlCard>
      </div>
    );
  }
}

CreateMenuForm.propTypes = {
  addDishes: React.PropTypes.func.isRequired,
};

function mapStateToProps(state){
  return{
    currentUserId: state.get('auth').user.id
  }
}

export default connect(mapStateToProps)(CreateMenuForm);
