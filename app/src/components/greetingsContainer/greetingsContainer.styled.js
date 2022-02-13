import styled from "styled-components";
import { Container, Button } from "../../theme/global";

export const ContainerStyled = styled(Container)`
    min-height: 464px;
    margin-bottom: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    border-left: 1px solid ${(props) => props.theme.color.border};
    border-right: 2px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-top: 1px solid ${(props) => props.theme.color.border};
`;
export const Info = styled.h4`
    font-family: ${(props) => props.theme.text.font.corporate};
    margin: auto auto;
    font-size: ${(props) => props.theme.text.size.medium};
    color: white;
    font-weight: 200;
`;
export const ButtonStyled = styled(Button)`
    padding: 2px 24px;
`;

export const Header3 = styled.h4`
    font-family: ${(props) => props.theme.text.font.corporateB};
    margin: 6px 6px;
    font-size: ${(props) => props.theme.text.size.huge};
    color: ${(props) => props.theme.color.text1};
`;
