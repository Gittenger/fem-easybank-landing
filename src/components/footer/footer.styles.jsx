import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FooterContainer = styled.div`
    ${FlexCenter}
    background-color: ${({ theme: { colors } }) => colors.darkBlue};
    color: ${({ theme: { colors } }) => colors.white};
    padding: 4rem 0 4rem;

    & > *.content-container {
        display: grid;
        grid-template-columns: 1fr 3fr 1.3fr;
        height: 10rem;

        .footer-head {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            .footer-icons {
                width: 70%;

                ul {
                    ${FlexCenter}
                    justify-content: space-between;
                    width: 100%;

                    & > * {
                        margin-right: .6rem;
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

                .col-1 {
                    grid-column: 1 / 2;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                }

                .col-2 {
                    grid-column: 2 / 3;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                }
            }
        }

        .footer-tail {
            padding-top: .5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            height: 70%;
            
            .footer-copyright {
                font-size: .8em;
            }
        }
    }
`;
