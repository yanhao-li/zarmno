import React from 'react';
import RestaurantInfoEdit from './components/RestaurantInfoEdit'
import MenuEdit from './Menu/MenuEdit';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setCurrentRes } from 'actions/RestaurantActions';

class RestaurantEdit extends React.PureComponent{

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(setCurrentRes(this.props.params.id));
  }

  render(){
    const { info } = this.props.restaurant;
    return(
      <div>
        <RestaurantInfoEdit {...this.props}/>
        <MenuEdit {...this.props}/>
        <Link to={'/restaurant/' + info.id}><button className="btn btn-secondary btn-sm">Go back</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      auth: state.get('auth'),
      restaurant: state.get('restaurant'),
      favorites: state.get('favorites')
  }
}

export default connect(mapStateToProps)(RestaurantEdit);
