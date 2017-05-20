import React from 'react';
import classNames from 'classNames';
import { setCurrentRes} from 'actions/RestaurantActions';
import RestaurantInfo from '../Common/RestaurantInfo';
import Menu from '../Common/Menu';
import NotFound from 'containers/NotFoundPage';
import { isEmpty } from 'lodash';
import { toggleFavorite } from 'actions/FavoritesActions';

class RestaurantPage extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      isFavorite: false
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(setCurrentRes(this.props.params.id));
    document.title = "Restaurant Information"
  }

  componentWillReceiveProps(nextProps){
    const {restaurant} = this.props;
    const {restaurants} = nextProps.favorites;
    if(restaurants.includes(restaurant.info.id)){
      this.setState({
        isFavorite: true
      })
    }
  }

  toggleFavorite(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { restaurant } = this.props;
    this.setState({
      isFavorite: !this.state.isFavorite
    });
    dispatch(toggleFavorite(this.state.isFavorite, restaurant.info.id));
  }

  render(){
    const { isFetching, info } = this.props.restaurant;
    const { isFavorite } = this.state;
    const btnClass = classNames({
      'btn': true,
      'btn-info': !isFavorite,
      'btn-danger': isFavorite
    });

    if (isFetching) {
      return <p>Loading</p>
    };

    if (isEmpty(info)){
      return <NotFound />;
    };

    return(
      <div>
        <RestaurantInfo {...this.props}/>
        <button className={btnClass} onClick={this.toggleFavorite}>{isFavorite ? 'Unfavorite' :'Save to Favorites'}</button>
        <Menu {...this.props}/>
      </div>
    );
  }
};

export default RestaurantPage;
