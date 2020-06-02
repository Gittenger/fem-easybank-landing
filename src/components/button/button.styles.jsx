import styled from "styled-components";

export const ButtonComponent = styled.button`
  padding: 1rem 2.4rem;
  border-radius: 2rem;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to right, ${colors.limeGreen}, ${colors.brightCyan})`};
  color: white;
  cursor: pointer;
`;
