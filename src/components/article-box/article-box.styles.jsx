import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ArticleBoxContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 30rem;

  .img-box {
    width: 100%;
    height: 18.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }
`;
