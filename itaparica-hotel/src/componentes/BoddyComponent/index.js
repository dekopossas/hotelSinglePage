import React from 'react';
import styled from 'styled-components';
import cofeBreakerBackGround from './image3/Image3.png';

const Boddy = styled.div``;

const BackgroundImage = styled.img`
  background-size: cover;
  min-height: 100px;
`;

const BoddyComponent = () => {
  return <Boddy>
    <BackgroundImage src={cofeBreakerBackGround} alt="sala de cafe"></BackgroundImage>
  </Boddy>;
};

export default BoddyComponent;
