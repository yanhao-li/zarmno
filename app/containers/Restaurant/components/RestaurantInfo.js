import React from 'react';
import classNames from 'classNames';
import { toggleFavorite } from '../actions';
import { connect } from 'react-redux';

class RestaurantInfo extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      isFavorite: false
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.favorites.includes(this.props.info.id)){
      this.setState({
        isFavorite: true
      })
    }
  }

  toggleFavorite(e){
    e.preventDefault();
    const { dispatch } = this.props;
    this.setState({
      isFavorite: !this.state.isFavorite
    });
    dispatch(toggleFavorite(this.state.isFavorite, this.props.info.id));
  }

  render(){
    const { info } = this.props;
    const { isFavorite } = this.state;
    const btnClass = classNames({
      'btn': true,
      'btn-info': !isFavorite,
      'btn-danger': isFavorite
    })
    return(

      <div>
        <h1>{info.name}</h1>
        <h1>{info.location}</h1>
        <button className={btnClass} onClick={this.toggleFavorite}>{isFavorite ? 'unfavorite' :'Save to Favorites'}</button>
        { info.description ? <p>{info.description}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
};

export default connect()(RestaurantInfo);
