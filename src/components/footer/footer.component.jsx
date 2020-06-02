import React from "react";

import Container from "../container/container.component";
import Button from "../button/button.component";

import LogoImg from "../../assets/logo-white.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Youtube from "../../assets/icon-youtube.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Instagram from "../../assets/icon-instagram.svg";

import { FooterContainer } from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <Container className="content-container">
      <div className="footer-head">
        <div className="footer-logo">
          <img src={LogoImg} alt="" />
        </div>
        <div className="footer-icons">
          <ul>
            <li>
              <img src={Facebook} alt="" />
            </li>
            <li>
              <img src={Youtube} alt="" />
            </li>
            <li>
              <img src={Twitter} alt="" />
            </li>
            <li>
              <img src={Pinterest} alt="" />
            </li>
            <li>
              <img src={Instagram} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <div className="col-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </div>
          <div className="col-2">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </div>
        </ul>
      </div>
      <div className="footer-tail">
        <Button>Request invite</Button>
        <div className="footer-copyright">
          &copy; Easybank. All Rights Reserved
        </div>
      </div>
    </Container>
  </FooterContainer>
);

export default Footer;
