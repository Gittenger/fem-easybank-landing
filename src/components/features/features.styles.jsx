import styled from "styled-components";

export const FeaturesContainer = styled.div`
  position: relative;
  height: 500px;
  background-color: ${({ theme: { colors } }) => colors.greyBlueLight};
  z-index: 0;
`;

export const HeadingContainer = styled.div`
  width: 35%;
`;
