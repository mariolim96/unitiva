import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    font-family: 'helvetica neue', sans-serif;
    body {
        background: ${(props) => props.theme.color.body};
        margin: 20px;
    }
`;

export default GlobalStyles;
