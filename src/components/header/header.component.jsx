import React from "react";

import Container from "../container/container.component";
import Button from "../button/button.component";

import LogoImg from "../../assets/logo.svg";
import { HeaderContainer, LogoContainer, NavLinks } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Container className="header-container">
      <LogoContainer>
        <img src={LogoImg} alt="" />
      </LogoContainer>
      <NavLinks>
        <ul>
          <li>
            <a href="#">
              Home
              <div className="hover-box"></div>
            </a>
          </li>
          <li>
            <a href="#">
              About
              <div className="hover-box"></div>
            </a>
          </li>
          <li>
            <a href="#">
              Contact
              <div className="hover-box"></div>
            </a>
          </li>
          <li>
            <a href="#">
              Blog
              <div className="hover-box"></div>
            </a>
          </li>
          <li>
            <a href="#">
              Careers
              <div className="hover-box"></div>
            </a>
          </li>
        </ul>
      </NavLinks>
      <Button>Request invite</Button>
    </Container>
  </HeaderContainer>
);

export default Header;
