import React from "react";

import Container from "../container/container.component";
import InfoBox from "../info-box/info-box.component";

import HeroMockupsImg from "../../assets/image-mockups.png";
import {
  HeroContainer,
  ContentContainer,
  BackgroundContainer,
} from "./hero.styles";

const Hero = () => (
  <HeroContainer>
    <Container>
      <ContentContainer>
        <InfoBox
          properties={{
            heading: "Next generation digital banking",
            info:
              "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
            priority: "h1",
            alignment: "left",
          }}
        />
        <button>Request invite</button>
      </ContentContainer>
    </Container>
    <BackgroundContainer>
      <div className="phones-image-box">
        <img src={HeroMockupsImg} alt="" />
      </div>
    </BackgroundContainer>
  </HeroContainer>
);

export default Hero;
