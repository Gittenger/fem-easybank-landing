import React from "react";

import Container from "../container/container.component";
import Button from "../button/button.component";

import LogoImg from "../../assets/logo-white.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../assets/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";

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
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Pinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <div className="col-1 col">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>
          <div className="col-2 col">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="footer-tail">
        <Button>Request invite</Button>
        <div className="footer-copyright">
          <span className="copyright-line-1">&copy; Easybank.&nbsp;</span>
          <span className="copyright-line-2">All Rights Reserved</span>
        </div>
      </div>
    </Container>
  </FooterContainer>
);

export default Footer;
