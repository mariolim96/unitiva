import styled from "styled-components";

import { Container } from "../../global.js";
export const Container1 = styled(Container)`
    ${Container}
`;

export const Break = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin: 0;
    border-bottom: 2px groove rgba(178, 178, 178, 0.56);
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
    h2,
    h6 {
        margin: 0 0 0 1px;
        color: ${(props) => props.theme.color.text1};
    }
    h6 {
        font-size: 0.8rem;
    }
    h2 {
        font-size: 1.4rem;
    }
`;

export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    font-stretch: expanded;
    color: ${(props) => props.theme.color.text};
    font-size: ${(props) => props.size || props.theme.text.size.Gicantic};
    margin-top: 64px;
    margin-bottom: 32px;
    font-family: ${(props) => props.theme.text.font.family};
`;

export const LeftHeader = styled.h2`
    color: ${(props) => props.theme.color.text1};
    margin: 0 0 0 1px;
    font-size: ${(props) => props.theme.text.size.medium};
    @media (max-width: 524px) {
        font-size: ${(props) => props.theme.text.size.small};
    }
`;
export const RightHeader = styled.h6`
    color: ${(props) => props.theme.color.text1};
    margin: 0 0 0 8px;
    font-size: ${(props) => props.theme.text.size.small};
    @media (max-width: 524px) {
        font-size: ${(props) => props.theme.text.size.tiny};
    }
`;
