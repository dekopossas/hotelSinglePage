import React from 'react';
import styled from 'styled-components';
import cofeBreakerBackGround from './image3/Image3.png';

const Boddy = styled.div`
  background-size: cover;
  background:url(${cofeBreakerBackGround}); 
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const BoddyComponent = () => {
  return <Boddy>
  </Boddy>;
};

export default BoddyComponent;
