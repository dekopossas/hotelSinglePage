import React from 'react';
import styled from 'styled-components';
import logoHeader from './imagens/logoHeader.png';

const Nav = styled.nav`
  top: 13px;
  left: 42px;
  width: 1283px;
  height: 74px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 16px #0000001a;
  border-radius: 8px;
  opacity: 0.98;
`;
const LogoHeader = styled.a`
  width: 62px;
  height: 65px;
  opacity: 1;
`;

const Button1 = styled.a`
  opacity: 0.9;
  hover: 1;
`;

const Button2 = styled.button``;

const NavBar = () => {
  return (
    <Nav>
      <LogoHeader href="#">
        <img src={logoHeader} alt="hotel itaparica"></img>
      </LogoHeader>
      <Button1 href="#">Inicio</Button1>
      <Button1>quartos</Button1>
      <Button1>o hotal</Button1>
      <Button1>promoção</Button1>
      <Button1>localização</Button1>
      <Button1>contato</Button1>
      <Button2>Reservas</Button2>
    </Nav>
  );
};

export default NavBar;
