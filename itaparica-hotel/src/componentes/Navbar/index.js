import React from 'react';
import styled from 'styled-components';
import logoHeader from './imagens/logoHeader.png';

const Nav = styled.nav`
  width: 90%;
  height: 74px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 16px #0000001a;
  border-radius: 8px;
  opacity: 0.98;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5%;
`;

const NavButton = styled.nav`
  display: flex;
  margin: 7%;
`;


const LogoHeader = styled.a`
  opacity: 1;
  margin: 7%
`;

const ImageLogo = styled.img`
  width: 62px;
  height: 65px;
`;

const Button1 = styled.li`
  opacity: 0.9;
  cursor: pointer;
  color: #9A9A9A;
  list-style: none;
  margin: 20px
`;

const Button2 = styled.button``;

const NavBar = () => {
  return (
    <Nav>
      <LogoHeader href="#">
        <ImageLogo src={logoHeader} alt="hotel itaparica"></ImageLogo>
      </LogoHeader>
      <NavButton>
        <Button1 href="#">Inicio</Button1>
        <Button1>quartos</Button1>
        <Button1>o hotal</Button1>
        <Button1>promoção</Button1>
        <Button1>localização</Button1>
        <Button1>contato</Button1>
        <Button2>Reservas</Button2>
      </NavButton>
    </Nav>
  );
};

export default NavBar;
