import { createGlobalStyle } from "styled-components";

import corporate from "./CorporateSR.otf";
import corporateBold from "./CorporateSB.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'corporate';
        src: url(${corporate}) format('opentype');
    }
    @font-face {
        font-family: 'corporateB';
        src: url(${corporateBold}) format('opentype');
    }
`;
