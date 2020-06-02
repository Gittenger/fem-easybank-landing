import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopM, laptopS, laptopXS, tabletLand, tabletM } = device;

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

  @media ${laptopM} {
    width: 25rem;

    .img-box {
      height: 16rem;
    }

    .content-container {
      padding: 1.5rem;
    }
  }

  @media ${laptopS} {
    width: 23rem;

    .img-box {
      height: 14rem;
    }

    .content-container {
      padding: 1.3rem;
    }
  }

  @media ${laptopXS} {
    width: 21rem;

    .img-box {
      height: 12.5rem;
    }

    .content-container {
      padding: 1.2rem;
    }
  }

  @media ${tabletLand} {
    width: 20vw;
    height: 100%;

    .img-box {
      height: 10vw;
    }

    .content-container {
      padding: 1.2rem;
    }
  }

  @media ${tabletM} {
    width: 100%;
    height: 100%;

    .img-box {
      height: 40vw;
    }
  }
`;
