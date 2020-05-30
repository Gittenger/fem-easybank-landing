import React from "react";

import Container from "../container/container.component";

import LogoImg from "../../assets/logo.svg";
import { HeaderContainer, LogoContainer, NavLinks } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Container>
      <LogoContainer>
        <img src={LogoImg} alt="" />
      </LogoContainer>
      <NavLinks>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </NavLinks>
      <button>Request invite</button>
    </Container>
  </HeaderContainer>
);

export default Header;
