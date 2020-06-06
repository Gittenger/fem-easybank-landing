import styled from "styled-components";
import { FlexCenter, device } from "../../style-utils/utils.styles";

const {
  laptopM,
  laptopS,
  laptopXS,
  tabletLand,
  tabletL,
  tabletM,
  tabletS,
  mobileM,
  mobileS,
} = device;

export const HeroContainer = styled.div`
  width: 100%;
  ${FlexCenter}
  position: relative;
  z-index: 25;

  & > *:first-child {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 500px;
  }

  @media ${tabletM} {
    & > *:first-child {
      grid-template-columns: 1fr;
      grid-template-rows: 300px 400px;
    }
  }
`;

export const ContentContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: flex-start;
  grid-column: 1 / 2;
  height: 300px;
  width: 100%;
  align-self: center;

  @media ${tabletM} {
    grid-row: 2 / 3;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  ${FlexCenter}
  grid-column: 2/3;
  transform: translate(700px, 0);
  width: 100%;
  height: 500px;
  background-image: url("./bg-intro-desktop.svg");
  background-size: 100%;
  background-position: top -400px left -50px;
  background-repeat: no-repeat;

  .phones-image-box {
    ${FlexCenter}
    position: relative;
    transform: translateX(-300px);
    width: 60%;

    img {
      width: 70%;
    }
  }

  @media ${laptopM} {
    transform: translate(600px, 0);
    .phones-image-box {
      transform: translateX(-250px);
    }
  }

  @media ${laptopS} {
    background-position: top -300px left -50px;
    transform: translate(500px, 0);
    .phones-image-box {
      transform: translateX(-200px);
    }
  }

  @media ${laptopXS} {
    background-position: top -300px left -50px;
    transform: translate(450px, 0);
    .phones-image-box {
      width: 75%;
      transform: translateX(-200px);
    }
  }

  @media ${tabletLand} {
    background-position: top -200px left -50px;
    transform: translate(400px, 0);
    .phones-image-box {
      width: 80%;
      transform: translateX(-150px);
    }
  }

  @media ${tabletL} {
    background-position: top -150px left -20px;
    transform: translate(370px, 0);
    .phones-image-box {
      width: 85%;
      transform: translateX(-125px);
    }
  }

  @media ${tabletM} {
    grid-row: 1 / 2;
    background-position: center center;
    height: 600px;
    transform: translate(0, -250px);
    .phones-image-box {
      width: 95%;
      transform: translateX(0);
    }
  }

  @media ${tabletS} {
    background-position: center center;
    height: 600px;
    transform: translate(0, -200px);
    .phones-image-box {
      width: 95%;
      transform: translateX(0);
    }
  }

  @media ${mobileM} {
    background-position: center center;
    background-size: 120%;
    height: 600px;
    transform: translate(0, -170px);
    .phones-image-box {
      width: 100%;
      transform: translateX(0) scale(1.1);
    }
  }

  @media ${mobileS} {
    background-position: center center;
    background-size: 135%;
    height: 600px;
    transform: translate(0, -170px);
    .phones-image-box {
      transform: translateX(0) scale(1.3);
    }
  }
`;
