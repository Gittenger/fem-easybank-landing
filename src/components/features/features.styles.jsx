import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM } = device;

export const FeaturesContainer = styled.div`
  ${FlexCenter}
  position: relative;
  z-index: 0;
  width: 100%;
  padding: 10rem 0;
  background-color: ${({ theme: { colors } }) => colors.greyBlueLight};

  .content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${laptopM} {
    padding: ;
  }
`;

export const HeadingContainer = styled.div`
  width: 35%;
`;

export const FeatureBoxContainer = styled.div`
  ${FlexCenter}
  justify-items: space-between;
`;
