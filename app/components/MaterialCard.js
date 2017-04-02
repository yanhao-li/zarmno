import React from 'react';
import styled from 'styled-components';

const MdlCard = styled.div`
  margin: 10px;
  background-color: #f7f7f7;
`

class MaterialCard extends React.PureComponent{
  render(){
    return(
      <MdlCard className="card" />
    );
  }
}

export default MaterialCard;
