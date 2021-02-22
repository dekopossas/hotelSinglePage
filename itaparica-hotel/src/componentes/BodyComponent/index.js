import React from 'react';
import styled from 'styled-components';
import FormHome from '../FormHome'
import cofeBreakerBackGround from './image3/Image3.png';

const Boddy = styled.div`
  background-size: cover;
  background:url(${cofeBreakerBackGround}); 
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
`;

const BodyComponent = () => {
  return <Boddy>
    <FormHome/>
  </Boddy>;
};

export default BodyComponent;
