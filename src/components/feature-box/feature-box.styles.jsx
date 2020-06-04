import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileM } = device;

export const FeatureBoxContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2rem 2rem 0;

  @media ${mobileM} {
    align-items: center;

    & > div:nth-child(2) {
      align-items: center;

      p {
        text-align: center;
      }
    }
  }
`;
