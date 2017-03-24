import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import video from './video-bg.mp4';
import videobg from './bg.jpg';
import videooverlay from './movie-overlay.png';

const JumbotronDiv = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

const MovieContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: #000;
  z-index: 0;
`;

const Movie = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  z-index: 100;
`;

const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: url(${videooverlay});
`;

const Jumbotron = () => (
  <JumbotronDiv className="jumbotron">
    <MovieContainer>
      <Movie poster={videobg} preload="metadata" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </Movie>
      <MovieOverlay id="movie-overlay"></MovieOverlay>
    </MovieContainer>
    <SearchBar />
  </JumbotronDiv>
    );

export default Jumbotron;
