import React from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../actions';

class RestaurantInfo extends React.PureComponent{
  constructor(){
    super();
    this.saveToFavorite = this.saveToFavorite.bind(this);
  };

  toggleLike(e){
    const {id} = this.props.info.id
    e.preventDefault();
    this.props.toggleLike(id);
  }

  render(){
    const { info } = this.props;
    return(
      <div>
        <h1>{info.name}</h1>
        <h1>{info.location}</h1>
        <button className="btn btn-info" onClick={this.toggleLike}>Add to Favorite</button>
        { info.description ? <p>{info.description}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
};

export default RestaurantInfo;
