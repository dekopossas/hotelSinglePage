import React from 'react';
import styled from 'styled-components';
import cofeBreakerBackGround from './image3/Image3.png';

const Boddy = styled.div`
  background-size: cover;
  background:url(${cofeBreakerBackGround}); 
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
`;

const Form = styled.div`
  top: 182px;
  left: 306px;
  width: 272px;
  height: 403px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #947B5F74;
  border-radius: 11px;
  position: absolute;
  opacity: 1;
`;

const BoddyComponent = () => {
  return <Boddy>
    <Form></Form>
  </Boddy>;
};

export default BoddyComponent;
