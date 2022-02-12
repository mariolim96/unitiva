import styled from "styled-components";

import { Container } from "../../theme/global.js";
export const Container1 = styled(Container)`
    padding: 0;
    margin: 0 100px;
`;

export const Break = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin: 0px 0px;

    border-bottom: 2px groove rgba(178, 178, 178, 0.56);
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
`;

export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    font-stretch: expanded;
    color: ${(props) => props.theme.color.text};
    font-size: 36px;
    margin-top: 64px;
    margin-bottom: 32px;
    font-family: ${(props) => props.theme.text.font.corporateB};
    font-weight: 900;
`;

export const LeftHeader = styled.h2`
    color: ${(props) => props.theme.color.text1};
    font-family: ${(props) => props.theme.text.font.corporateB};
    margin: 0 0 0 1px;
    font-size: ${(props) => props.theme.text.size.xlarge};
    @media (max-width: 524px) {
        font-size: ${(props) => props.theme.text.size.small};
    }
`;
export const RightHeader = styled.h6`
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.righth};
    margin: 0 0 0 8px;
    font-size: ${(props) => props.theme.text.size.small};
    font-weight: normal;
    @media (max-width: 524px) {
        font-size: ${(props) => props.theme.text.size.tiny};
    }
`;
