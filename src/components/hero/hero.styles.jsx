import styled from "styled-components";
import { FlexCenter } from "../../style-utils/utils.styles";

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
`;

export const ContentContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: flex-start;
  grid-column: 1/2;
  height: 300px;
  width: 100%;
  align-self: center;
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
`;
