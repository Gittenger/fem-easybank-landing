import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { laptopXS, tabletLand, tabletM } = device;

export const FooterContainer = styled.div`
    ${FlexCenter}
    background-color: ${({ theme: { colors } }) => colors.darkBlue};
    color: ${({ theme: { colors } }) => colors.white};
    padding: 4rem 0 4rem;
    width: 100%;

    & > *.content-container {
        display: grid;
        grid-template-columns: 1.5fr 3fr 1.3fr;
        height: 10rem;

        .footer-head {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            .footer-icons {
                width: 55%;

                ul {
                    ${FlexCenter}
                    justify-content: space-between;
                    width: 100%;

                    & > li {
                        margin-right: .6rem;
                    }

                    a path {
                        transition: all .3s;
                    }

                    a:hover path {
                        fill: ${({ theme: { colors } }) => colors.limeGreen};
                    }
                }
            }
        }

        .footer-links {
            ul{
                display: grid;
                grid-template-columns: 1fr 2.5fr;
                height: 100%;
                padding-top: .5rem;

                a {
                    transition: color .2s;

                    &:hover {
                        color: ${({ theme: { colors } }) => colors.limeGreen};
                    }
                }

                .col {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                }

                .col-1 {
                    grid-column: 1 / 2;
                }

                .col-2 {
                    grid-column: 2 / 3;
                }
            }
        }

        .footer-tail {
            padding-top: .5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            height: 90%;
            
            .footer-copyright {
                font-size: .8em;
            }
        }
    }

    @media ${laptopXS} {
        & > *.content-container {
        grid-template-columns: 1.8fr 2.5fr 1.5fr;
        height: 10rem;

        .footer-head {
            .footer-icons {
                width: 65%;
            }
        }
    

        .footer-links {
                ul{
                    grid-template-columns: 1.4fr 2fr;
            }
        }
    }

    @media ${tabletLand} {
        .footer-copyright {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }

    @media ${tabletM} {
        & > *.content-container {
        .footer-head {
            .footer-icons {
                width: 75%;
            }
        }
    }
`;
