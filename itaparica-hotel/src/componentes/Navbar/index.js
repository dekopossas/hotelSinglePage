import React from 'react';
import styled from 'styled-components';

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

const Button1 = styled.a``;

const Button2 = styled.button``;

const NavBar = () => {
  return (
    <Nav>
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
