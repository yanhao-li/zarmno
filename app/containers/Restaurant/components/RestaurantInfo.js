import React from 'react';

class RestaurantInfo extends React.PureComponent{
  render(){
    const { info } = this.props;
    return(
      <div>
        <h1>{info.name}</h1>
        <h1>{info.location}</h1>
        <button className="btn btn-info">Follow</button>
        { info.description ? <p>{info.description}</p> : <p>This restaurant hasn't added information yet</p>}
      </div>
    );
  }
};

export default RestaurantInfo;
