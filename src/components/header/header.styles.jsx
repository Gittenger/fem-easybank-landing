import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM, tabletM } = device;

export const HeaderContainer = styled.header`
  ${FlexCenter}
  width: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  height: 7rem;
  position: relative;
  z-index: 100;

  & > *.header-container {
    ${FlexCenter}
    justify-content: space-between;
    height: 100%;
  }

  @media ${tabletM} {
    & > *.header-container > button {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div``;

export const NavLinks = styled.nav`
  ${FlexCenter}
  height: 100%;

  ul {
    ${FlexCenter}
    height: 100%;

    li {
      ${FlexCenter}
      margin: 0 1rem;
      height: 100%;

      a {
        ${FlexCenter}
        height: 100%;
        position: relative;
        overflow-y: hidden;

        .hover-box {
          height: 4px;
          width: 100%;
          transform: translateY(200px);
          transition: transform 0.3s;
        }

        &:hover {
          & > .hover-box {
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(0);
            background: ${({ theme: { colors } }) =>
              `linear-gradient(to right, ${colors.limeGreen}, ${colors.brightCyan})`};
          }
        }
      }
    }
  }
`;
