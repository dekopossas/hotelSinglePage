import React from 'react';
import styled from 'styled-components'

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

const NavBar = () => {
  return <Nav>
    <a href="#">Inicio</a>
    <a href="#">quartos</a>
    <a href="#">o hotal</a>
    <a href="#">promoção</a>
    <a href="#">localização</a>
    <a href="#">contato</a>
    <button>Reservas</button>
  </Nav>;
};

export default NavBar;
