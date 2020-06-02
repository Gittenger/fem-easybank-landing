import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM } = device;

export const ContainerDiv = styled.div`
  width: ${({ theme: { layout } }) => layout.desktop.contentWidth};

  @media ${laptopM} {
    width: ${({ theme: { layout } }) => layout.laptopM.contentWidth};
  }
`;
