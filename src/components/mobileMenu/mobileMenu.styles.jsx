import styled from "styled-components";

import { FlexCenter, deviceMin } from "../../style-utils/utils.styles";

const { minTabletS } = deviceMin;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & > #menu-toggle-button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 200;
    width: 35px;
    height: 25px;
    margin: 2.5rem 2.5rem 0 0;
    cursor: pointer;
    ${FlexCenter}
    flex-direction: column;
    justify-content: space-between;

    div {
      height: 2px;
      background-color: black;
      width: 100%;
      transform: rotate(0) translate(0, 0);
      transition: transform 0.5s;
    }

    &.active {
      div:nth-child(2) {
        transform: translateX(500px);
      }

      & > div:first-child {
        transform: rotate(45deg) translate(5px, 15px);
      }

      & > div:last-child {
        transform: rotate(-45deg) translate(0, -12px);
      }
    }
  }

  @media ${minTabletS} {
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 0;
  z-index: 90;
  width: 100vw;
  height: calc(100vh - 7rem);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  ${FlexCenter}
  align-items: flex-start;
  padding-top: 1rem;
  transform: translateY(-1000px);
  transition: transform 0.7s;

  &.active {
    transform: translateY(0);
  }
`;

export const MobileNav = styled.nav`
  position: relative;
  width: 85%;
  background: white;
  height: 80%;
  border-radius: 1rem;
  font-size: 1.7em;
  ${FlexCenter}

  ul {
    height: 90%;
    width: 85%;
    ${FlexCenter}
    flex-direction: column;
    justify-content: space-between;

    & > * {
      width: 100%;
      ${FlexCenter}

      a {
        text-align: center;
        width: 100%;
        padding: 1rem;

        &:hover {
          background-color: ${({ theme: { colors } }) => colors.darkBlue};
          color: white;
          border-radius: 1rem;
          transition: all 0.4s;
        }
      }
    }
  }
`;
