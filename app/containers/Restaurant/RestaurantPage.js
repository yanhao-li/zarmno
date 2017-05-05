import React from 'react';
import { fetchRestaurant } from './actions';
import BusinessNotFound from './components/BusinessNotFound';
import RestaurantInfo from './components/RestaurantInfo';
import Menu from './components/Menu';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NotFound from 'containers/NotFoundPage';
import { isEmpty } from 'lodash';

class RestaurantPage extends React.PureComponent{

  componentDidMount(){
    this.props.fetchRestaurant(this.props.params.id);
    document.title = "Restaurant Information"
  }

  render(){
    const { currentRes, auth } = this.props;
    const { user } = auth;
    const { info, menu } = currentRes;
    let notfound;
    if(user.role == "business"){
      notfound = <BusinessNotFound />;
    } else {
      notfound = <NotFound />;
    }

    return(
      <div>
        {isEmpty(info) ?
        (
          <div>
            { notfound }
          </div>
        )
        :
        (
          <div>
            <RestaurantInfo info={ info }/>
            <Menu menu={ menu }/>
            {user.role == 'business' && (<Link to={"/restaurant/" + info.id + "/edit"} className="btn btn-secondary">Edit</Link>)}
          </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRes: state.get('currentRes'),
    auth: state.get('auth')
  };
}

const mapDispatchToPros = (dispatch) => {
  return{
    setCurrentRes: (restaurant) => {
      dispatch(setCurrentRes(restaurant));
    },

  };
}

export default connect(mapStateToProps, {fetchRestaurant})(RestaurantPage);
