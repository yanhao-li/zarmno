import React from 'react';
import { setCurrentRes } from './actions';
import BusinessNotFound from './components/BusinessNotFound';
import RestaurantInfo from './components/RestaurantInfo';
import Menu from './Menu/Menu';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NotFound from 'containers/NotFoundPage';
import { isEmpty } from 'lodash';

class RestaurantPage extends React.PureComponent{

  componentDidMount(){
    this.props.setCurrentRes(this.props.params.id);
    document.title = "Restaurant Information"
  }

  render(){
    const { restaurant, auth } = this.props;
    const { user } = auth;
    const { info, menu, isFetching } = restaurant;
    let notfound;
    if(user.role == "business"){
      notfound = <BusinessNotFound />;
    } else {
      notfound = <NotFound />;
    }
    
    if(isFetching) {
      return <p>Loading</p>
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
            <RestaurantInfo info={ info } auth={ auth }/>
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
    restaurant: state.get('restaurant'),
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

export default connect(mapStateToProps, {setCurrentRes})(RestaurantPage);
