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

const Link = styled.link`
  top: 41px;
  left: 615px;
  width: 38px;
  height: 19px;
  text-align: center;
  font: normal normal bold 16px/19px Lato;
  letter-spacing: 0px;
  color: #9a9a9a;
  opacity: 1;
`;

const NavBar = () => {
  return (
    <Nav>
      <Link>Inicio</Link>
      <Link>quartos</Link>
      <Link>o hotal</Link>
      <Link>promoção</Link>
      <Link>localização</Link>
      <Link>contato</Link>
      <button></button>
    </Nav>
  );
};

export default NavBar;
