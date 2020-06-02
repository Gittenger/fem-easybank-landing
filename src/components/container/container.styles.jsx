import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM, laptopS, laptopXS, tabletLand } = device;

export const ContainerDiv = styled.div`
  width: ${({ theme: { layout } }) => layout.desktop.contentWidth};

  @media ${laptopM} {
    width: ${({ theme: { layout } }) => layout.laptopM.contentWidth};
  }

  @media ${laptopS} {
    width: ${({ theme: { layout } }) => layout.laptopS.contentWidth};
  }

  @media ${laptopXS} {
    width: ${({ theme: { layout } }) => layout.laptopXS.contentWidth};
  }

  @media ${tabletLand} {
    width: ${({ theme: { layout } }) => layout.tabletLand.contentWidth};
  }
`;
