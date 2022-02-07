import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const Container = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 20px;
`;
const GlobalStyles = createGlobalStyle`
    font-family: 'helvetica neue', sans-serif;
    body {
        background: ${(props) => props.theme.color.body};
        margin: 20px;
    }
`;

export default GlobalStyles;
