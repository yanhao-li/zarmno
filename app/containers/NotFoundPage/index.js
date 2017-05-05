/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

const NotFoundHeader = styled.h1`
    position: relative;
    display: block;
    padding: 60px 0 0 0;
    box-sizing: border-box;
`;


export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NotFoundHeader>
        <div>404 NOT FOUND</div>
      </NotFoundHeader>
    );
  }
}
