import styled from "styled-components";
import { Button } from "../../global";
export const FooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 84px;
    background-color: white;
    border-top: 1px solid ${(props) => props.theme.color.borderF};
`;

export const Info = styled.h4`
    font-family: ${(props) => props.theme.text.font.corporate};
    margin: auto auto;
    font-size: ${(props) => props.theme.text.size.medium};
    color: white;
    font-weight: 200;
`;
