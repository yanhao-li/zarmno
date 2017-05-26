import React from 'react';
import classNames from 'classNames';
import { setCurrentRes} from 'actions/RestaurantActions';
import RestaurantInfo from '../Common/RestaurantInfo';
import Menu from './components/Menu';
import NotFound from 'containers/NotFoundPage';
import { isEmpty } from 'lodash';
import { toggleFavorite } from 'actions/FavoritesActions';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const FeatureImgDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgba(130, 31, 32, 1);
  height: 500px;
  overflow: hidden;
  background-image: url("https://truffle-assets.imgix.net/pxqrocxwsjcc_1U8QdKL1ogqw60u04k2KmI_hainanese-chicken-rice_squareThumbnail_en-US.png");
  background-size: cover;
`

const styles = {
  InfoPaper: {
    position: 'absolute',
    bottom: 0,
    borderRadius: '5px 5px 0 0',
    height: '300px',
  }
}

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
    for (let x in restaurants) {
      if (restaurants[x].info.id == restaurant.info.id){
        this.setState({
          isFavorite: true
        })
        break;
      }
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

    if (isFetching) {
      return <p>Loading</p>
    };

    if (isEmpty(info)){
      return <NotFound />;
    };

    return(
      <div>
        <FeatureImgDiv>
          <Paper className="container" style={styles.InfoPaper}>
            <div className="row">
              <div className="col">
                <RestaurantInfo {...this.props}/>
                <Chip backgroundColor={isFavorite ? '#3F51B5' : '#EC407A'} labelColor="white" onClick={this.toggleFavorite} style={{marginLeft: 30}}>{isFavorite ? 'Remove From Favorite' :'Save to Favorites'}</Chip>
              </div>
              <div className="col">
                <Card style={{height: 250, width: 250, float: 'right', margin: 30}}>
                  <CardMedia
                    overlay={<CardTitle title="more images"> </CardTitle>}
                    style={{height: '250px'}}
                    >
                    <img src="https://media.timeout.com/images/100666581/image.jpg" style={{width: '250px', height: '250px'}}/>
                  </CardMedia>
                </Card>
              </div>
            </div>
          </Paper>
        </FeatureImgDiv>
        <Menu {...this.props}/>
      </div>
    );
  }
};

export default RestaurantPage;
