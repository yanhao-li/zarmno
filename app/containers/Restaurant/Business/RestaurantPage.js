import React from 'react';
import { setCurrentRes } from 'actions/RestaurantActions';
import BusinessNotFound from './BusinessNotFound';
import RestaurantInfo from '../Common/RestaurantInfo';
import RestaurantInfoEdit from './RestaurantInfoEdit';
import Menu from '../Common/Menu';
import { isEmpty } from 'lodash';
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
      isEditing: false
    }
  }

  componentDidMount(){
    const {dispatch, restaurant} = this.props;
    dispatch(setCurrentRes(this.props.params.id));
    document.title = "Restaurant Infomation";
  }

  onEdit = () => {
    this.setState({
      isEditing: true
    });
  }

  cancelEdit = () => {
    this.setState({
      isEditing: false
    })
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
      <div>
        <FeatureImgDiv>
          <Paper className="container" style={styles.InfoPaper}>
            <div className="row">
              <div className="col">
                {this.state.isEditing
                  ?
                  (<RestaurantInfoEdit {...this.props} cancelEdit = {this.cancelEdit}/>)
                  :
                  (<RestaurantInfo {...this.props}/>)
                }
                {!this.state.isEditing && (<button className="btn btn-secondary" onClick={this.onEdit}>Edit</button>)}

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
}

export default RestaurantPage;
