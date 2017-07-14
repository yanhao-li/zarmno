import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Common actions
import { fetchRestaurantById } from 'actions/RestaurantActions';


// For Customer User
import NotFound from 'containers/NotFoundPage';

// For Business User
import BusinessNotFound from 'components/RestaurantPage/Business/BusinessNotFound';
import Menu from 'components/RestaurantPage/Common/Menu';
import RestaurantHeader from 'components/RestaurantPage/Common/RestaurantHeader';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

class RestaurantPage extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      isFetching: false,
      restaurant: [],
      menu: [],
    }
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    const id = params.id;
    this.setState({
      isFetching: true,
    })

    fetchRestaurantById(id).then(
      restaurant => {
        this.setState({
          isFetching: false,
          restaurant: restaurant,
        })
      }
    )
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    const { restaurant } = this.state;

    if (this.state.isFetching) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <RestaurantHeader {...this.props} />
        <Menu {...this.props} restaurant={restaurant} />
      </div>
    );
  }
}

RestaurantPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  auth: state.get('auth'),
});

export default connect(mapStateToProps)(RestaurantPage);
