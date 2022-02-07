import { createGlobalStyle } from "styled-components";

import corporate from "./CorporateS.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${corporate}) format('woff2'),
    }
`;
