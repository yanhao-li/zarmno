import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  background-color: #f5f5f5;
`;

export default class Footer extends React.PureComponent {
  render(){
    return(
      <StyledFooter>
        <ul>
          <li>
            <Link className="text-muted" to="/restaurant">Claim my business</Link>
          </li>
        </ul>
      </StyledFooter>
    )
  };
};
