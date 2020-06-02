import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM, laptopS, tabletLand, tabletM } = device;

export const ArticlesContainer = styled.div`
  ${FlexCenter}
  padding: 10rem 0 6rem;
  width: 100%;

  & > *.content-container {
    ${FlexCenter}
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${laptopM} {
    font-size: 1.6rem;
  }

  @media ${laptopS} {
    font-size: 1.5rem;
  }

  @media ${tabletLand} {
    font-size: 1.4rem;

    h3 {
      font-size: 1.1em;
    }
  }

  @media ${tabletM} {
    padding: 3rem 0;
    align-items: flex-start;

    & > *.content-container {
      display: block;
    }
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

  @media ${tabletLand} {
    height: 34rem;
  }

  @media ${tabletM} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50rem 50rem;
    width: 100%;
    height: 100rem;
  }
`;
