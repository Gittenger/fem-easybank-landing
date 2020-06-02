import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { tabletLand } = device;

export const ButtonComponent = styled.button`
  padding: 1rem 2.4rem;
  border-radius: 2rem;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to right, ${colors.limeGreen}, ${colors.brightCyan})`};
  color: white;
  cursor: pointer;
  white-space: nowrap;

  @media ${tabletLand} {
    padding: 0.8rem 1.8rem;
  }
`;
