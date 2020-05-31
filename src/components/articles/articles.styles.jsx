import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ArticlesContainer = styled.div`
  ${FlexCenter}
  padding-top: 10rem;

  & > *.content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ArticleBoxesContainer = styled.div`
  ${FlexCenter}
  justify-content: space-between;

  & > * {
    margin-right: 2rem;
  }
`;
