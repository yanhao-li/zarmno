import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
// For Customer User
import NotFound from 'containers/NotFoundPage';
// For Business User
import BusinessNotFound from 'components/RestaurantPage/Business/BusinessNotFound';
import { setCurrentRes } from 'actions/RestaurantActions';
import Menu from 'components/RestaurantPage/Common/Menu';
import RestaurantHeader from 'components/RestaurantPage/Common/RestaurantHeader';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

class RestaurantPage extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      isFetching: false;
    }
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    const id = params.id;
    this.setState({
      isFetching: true;
    })

    fetchRestaurantById(id).then(
      restaurant => {
        this.setState({
          isFetching: false;
        })
      }
    )
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
      }
      return <NotFound />;
    }

    return (
      <div>
        <RestaurantHeader {...this.props} />
        <Menu {...this.props} />
      </div>
    );
  }
}

RestaurantPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  auth: state.get('auth'),
  restaurant: state.get('restaurant'),
  favorites: state.get('favorites'),
});

export default connect(mapStateToProps)(RestaurantPage);
