import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM, laptopS } = device;

export const ArticlesContainer = styled.div`
  ${FlexCenter}
  padding: 10rem 0 6rem;
  width: 100%;

  & > *.content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;

    h2 {
      margin-bottom: 1.5rem;
    }
  }

  @media ${laptopM} {
    font-size: 1.6rem;

    & > *.content-container {
      h2 {
        margin-bottom: 1rem;
      }
    }
  }

  @media ${laptopS} {
    font-size: 1.5rem;
  }
`;

export const ArticleBoxesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > a {
    margin-right: 2rem;
    max-height: 45rem;

    &:hover {
      & h3 {
        transition: color 0.2s;
        color: ${({ theme: { colors } }) => colors.limeGreen};
      }
    }
  }

  @media ${laptopS} {
    & > a {
      margin-right: 1.5rem;
      max-height: 43rem;
    }
  }
`;
