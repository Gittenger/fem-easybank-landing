import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const InfoBoxContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "center"
      ? "center"
      : alignment === "left"
      ? "flex-start"
      : alignment === "right"
      ? "flex-end"
      : "center"};
  width: 100%;
`;

export const Info = styled.p`
  margin: 2.5rem 0;
`;
