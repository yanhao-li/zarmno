import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f6f6f6;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

`;
