import React from 'react';
import { setCurrentRes } from 'actions/RestaurantActions';
import BusinessNotFound from './BusinessNotFound';
import RestaurantInfo from '../Common/RestaurantInfo';
import Menu from '../Common/Menu';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';

class RestaurantPage extends React.PureComponent{

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(setCurrentRes(this.props.params.id));
    document.title = "Restaurant Information"
  }

  render(){
    const { restaurant, auth } = this.props;
    const { info, menu, isFetching } = restaurant;

    if (isFetching) {
      return <p>Loading</p>
    }

    if (isEmpty(info)){
      return <BusinessNotFound />;
    }

    return(
      <div className="container">
        <RestaurantInfo {...this.props}/>
        <Menu {...this.props}/>
        <Link to={"/restaurant/" + info.id + "/edit"} className="btn btn-secondary">Edit</Link>
      </div>
    );
  }
}

export default RestaurantPage;
