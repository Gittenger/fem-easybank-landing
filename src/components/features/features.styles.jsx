import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FeaturesContainer = styled.div`
  ${FlexCenter}
  position: relative;
  z-index: 0;
  padding: 10rem;
  background-color: ${({ theme: { colors } }) => colors.greyBlueLight};

  .content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeadingContainer = styled.div`
  width: 35%;
`;

export const FeatureBoxContainer = styled.div`
  ${FlexCenter}
  justify-items: space-between;
`;
