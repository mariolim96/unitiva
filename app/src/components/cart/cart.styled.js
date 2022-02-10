import styled from "styled-components";
import { Container } from "../../global";
import { Header3 } from "../../global";


export const CartContainer = styled(Container)`
    background: white;
    /* width:1149px; */
    border-left: 1px solid ${(props) => props.theme.color.border};
    border-right: 2px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-radius: 8px;
    margin: 20px 100px;
    padding: 0px 1px;
    box-sizing: border-box;
`;
export const CartGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    justify-content: space-between;
    grid-gap: 0px;
    padding: 30px;
    background: ${(props) => props.theme.color.card};
    /* border: 1px solid ${(props) => props.theme.color.border}; */
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;
//border of last 5 cells have no bottom border
export const CartItem = styled.div`
    display: inline;
    border-bottom: 2px solid ${(props) => props.theme.color.border};
    border-right: 2px solid ${(props) => props.theme.color.border};
    padding: ${(props) => (props.title ? "8px " : "18px 8px")};
    /* padding-left: 0px; */
    &:nth-child(5n) {
        border-right: none;
    }

    &:nth-last-child(-n + 5) {
        border-bottom: none;
    }
`;
export const Header = styled(Header3)`
    font-size: ${(props) => props.theme.text.size.xlarge};
    padding: 20px 0px 0px 30px;
`;

export const span = styled.span`
    font-size: ${(props) => props.theme.text.size.medium};
    font-family: ${(props) => props.theme.text.font.corporateB};
    font-weight: 100;
    margin: 0;
`;

export const CartItemTitles = styled(span)`
    color: ${(props) => props.theme.color.text1};
    font-size: ${(props) => props.theme.text.size.large};
    font-weight: 500;
    padding: 0px;
    float: left;
`;
export const CartIteminfo = styled(span)`
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.text4};
    font-size: ${(props) => props.theme.text.size.medium};
    font-weight: ;
`;
export const CartItemAdd = styled(span)`
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.text2};
`;
