import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1168px;
    margin: 0 100px;
    padding: 0 20px;
    margin-bottom: 80px;
`;
const GlobalStyles = createGlobalStyle`
    font-family: 'helvetica neue', sans-serif;
    body {
        padding: 0;
        background: ${(props) => props.theme.color.body};
        margin: 0
        margin-bottom: 100px;

    }
`;
export const Button = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    outline: none;
    color: white;
    border-radius: 4px;
    border: none;
    font-size: ${(props) => props.theme.text.size.small};
    font-family: ${(props) => props.theme.text.font.corporate};
    font-weight: 100;
    width: 112px;
    height: 36px;
    float: right;
    padding: 2px 16px;
    margin: 24px 32px;

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

export const Header3 = styled.h3`
    font-family: ${(props) => props.theme.text.font.corporateB};
    margin: 0px;
    padding: 0;
    font-size: ${(props) => props.theme.text.size.medium};
    color: ${(props) => props.theme.color.text1};
    font-weight: normal;
`;
export const Span = styled.span`
    font-size: ${(props) => props.theme.text.size.medium};
    font-family: ${(props) => props.theme.text.font.corporateB};
    font-weight: 100;
    margin: 0;
`;
export default GlobalStyles;
