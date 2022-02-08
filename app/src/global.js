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
export const Button = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    outline: none;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: ${(props) => props.theme.text.size.small};
    font-family: ${(props) => props.theme.text.font.corporate};
    font-weight: 100;
    min-width: 106px;
    float: right;
    padding: 6px 16px;
    margin: 24px 32px;
    height: 42px;
    background-color: ${(props) => props.theme.color.button};
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.5s;
    &:hover:enabled {
        background: #2c3e50;
        filter: brightness(115%);
    }
    &:active:enabled {
        background: #2c3e50;
        top: 2px;
    }
`;

export default GlobalStyles;
