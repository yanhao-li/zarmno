import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// material-ui
import Paper from 'material-ui/Paper';
// For Business User
import RestaurantInfoEdit from 'containers/Restaurant/components/Business/RestaurantInfoEdit';
// For Customer User
import FavoriteButton from './FavoriteButton';
import RestaurantInfo from './RestaurantInfo';
import RestaurantImgs from './RestaurantImgs';

const propTypes = {
  auth: PropTypes.object.isRequired,
};

const HeaderStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgba(130, 31, 32, 1);
  height: 500px;
  overflow: hidden;
  background-image: url("https://truffle-assets.imgix.net/pxqrocxwsjcc_1U8QdKL1ogqw60u04k2KmI_hainanese-chicken-rice_squareThumbnail_en-US.png");
  background-size: cover;
`;

const styles = {
  InfoPaper: {
    position: 'absolute',
    bottom: 0,
    borderRadius: '5px 5px 0 0',
    height: '300px',
  },
  addDishBottom: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
};

class RestaurantHeader extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
    this.onEdit = this.onEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  onEdit() {
    this.setState({
      isEditing: true,
    });
  }

  cancelEdit() {
    this.setState({
      isEditing: false,
    });
  }

  render() {
    const { user } = this.props.auth;
    let information;
    if (user.role === 'business') {
      if (this.state.isEditing) {
        information = (<RestaurantInfoEdit {...this.props} cancelEdit={this.cancelEdit} />);
      } else {
        information = (
          <div>
            <RestaurantInfo {...this.props} />
            <button className="btn btn-secondary" onClick={this.onEdit} style={{ marginLeft: '30px' }}>
              Edit
            </button>
          </div>
        );
      }
    } else {
      information = (
        <div>
          <RestaurantInfo {...this.props} />
          <FavoriteButton {...this.props} />
        </div>
      );
    }


    return (
      <HeaderStyle>
        <Paper className="container" style={styles.InfoPaper}>
          <div className="row">
            <div className="col">
              {information}
            </div>
            <div className="col">
              <RestaurantImgs />
            </div>
          </div>
        </Paper>
      </HeaderStyle>
    );
  }
}

RestaurantHeader.propTypes = propTypes;

export default RestaurantHeader;
