import { createGlobalStyle } from "styled-components";

import { FlexCenter } from "./utils.styles";

const GlobalStyles = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    ${FlexCenter}
    flex-direction: column;
    font-size: 1.8rem;
    width: 100vw;
    background-color: ${({ theme: { colors } }) => colors.greyLight};
    font-family: 'Public Sans', sans-serif;
    position: relative;
    overflow-x: hidden;
}

#root {
    width: 100%;
    ${FlexCenter}
    flex-direction: column;
}

a{
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}
`;

export default GlobalStyles;
