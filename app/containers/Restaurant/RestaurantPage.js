import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Menu from './components/Common/Menu';
import { setCurrentRes } from 'actions/RestaurantActions';
import RestaurantHeader from './components/Common/RestaurantHeader';
// For Customer User
import NotFound from 'containers/NotFoundPage';
// For Business User
import BusinessNotFound from 'containers/Restaurant/components/Business/BusinessNotFound';

class RestaurantPage extends React.PureComponent {

  componentDidMount() {
    const { dispatch, restaurant } = this.props;
    dispatch(setCurrentRes(this.props.params.id));
    document.title = 'Restaurant Infomation';
  }

  render() {
    const { auth, restaurant } = this.props;
    const { isFetching, info } = restaurant;
    const { user } = auth;

    if (isFetching) {
      return <p>Loading</p>;
    }

    if (isEmpty(info)) {
      if (user.role === 'business') {
        return <BusinessNotFound />;
      } else {
        return <NotFound />;
      }
    }

    return (
      <div>
        <RestaurantHeader {...this.props} />
        <Menu {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.get('auth'),
  restaurant: state.get('restaurant'),
  favorites: state.get('favorites'),
});

export default connect(mapStateToProps)(RestaurantPage);
