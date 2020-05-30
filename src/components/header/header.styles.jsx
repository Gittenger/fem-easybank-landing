import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeaderContainer = styled.header`
  ${FlexCenter}
  width: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  height: 7rem;
  position: relative;
  z-index: 100;

  & > *:first-child {
    ${FlexCenter}
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div``;

export const NavLinks = styled.nav`
  ${FlexCenter}

  ul {
    ${FlexCenter}

    li {
      margin: 0 1rem;
    }
  }
`;
