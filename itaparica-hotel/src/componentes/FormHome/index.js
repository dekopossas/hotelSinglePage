import React from 'react';
import styled from 'styled-components';
import logoForm from './logoDesktop/logo desktop.png'

const Form = styled.div`
  top: 182px;
  left: 306px;
  width: 272px;
  height: 403px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #947b5f74;
  border-radius: 11px;
  position: absolute;
  opacity: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonReseveAgora = styled.button`
  background: #f16136 0% 0% no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
  height: 37px;
  width: 242px;

`;

const LogoHotel = styled.img`
  width: 130px;
  height: 72px;
`;

const FormHome = () => {
  return (
    <Form>
      <LogoHotel src={logoForm} alt="logo do hotel"></LogoHotel>
      <ButtonReseveAgora>Reserve agora</ButtonReseveAgora>
    </Form>
  );
};

export default FormHome;
