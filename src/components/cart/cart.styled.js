import styled from 'styled-components';
import { Container } from '../../theme/global';
import { Header3 } from '../../theme/global';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { IoMdRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io';
export const CartContainer = styled(Container)`
    background: white;
    border-left: 1px solid ${(props) => props.theme.color.border};
    border-right: 2px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-radius: 8px;
    margin: 20px 100px 80px 100px;
    padding: 0px 1px;
    box-sizing: border-box;
    overflow: hidden;
`;
export const CartGrid = styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr 2fr;
    justify-content: space-between;
    grid-gap: 0px;
    padding: 8px 30px 32px 30px;
    background: ${(props) => props.theme.color.card};
    @media (max-width: 612px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        overflow: hidden;
        min-width: 0;
        min-height: 0;
        padding-left: auto;
    }
`;
export const CartItem = styled.div`
    display: inline;
    border-bottom: 2px solid ${(props) => props.theme.color.border};
    border-right: 2px solid ${(props) => props.theme.color.border};
    padding: ${(props) => (props.title ? '8px ' : '18px 8px')};
    padding-left: 16px;
    @media (min-width: 612px) {
    &:nth-child(5n) {
        border-right: none;
    }
    &:nth-last-child(-n + 5) {
        border-bottom: none;
    }}
    &:nth-last-child(5n + 5) {
        padding-left:8px ;
`;
export const Header = styled(Header3)`
    font-size: ${(props) => props.theme.text.size.huge};
    padding: 20px 0px 0px 30px;
    @media (min-width: 612px) {
        font-size: ${(props) => props.theme.text.size.huge};
    }
`;

export const span = styled.span`
    font-size: ${(props) => props.theme.text.size.medium};
    font-family: ${(props) => props.theme.text.font.corporateB};
    font-weight: 100;
    margin: 0;
    @media (min-width: 612px) {
        margin
    }
`;
export const TextWrapper = styled.div`
    box-sizing: content-box;
    display: block;
    margin: Auto;
    margin-right: 40px;
    width: 164px;
    float: right;
    display: block;
    clear: ${(props) => props.clear};
    text-align: left;
    padding-left: ${(props) => props.padding};
    padding-bottom: ${(props) => props.padding};
    @media (max-width: 612px) {
        margin: auto;
        padding: 4px;
        width: auto;
    }
`;

export const Header4 = styled.h4`
    display: inline-block;
    margin:  8px 0px 8px 0px;
    color: ${(props) => props.theme.color.text1};
    font-size: ${(props) => props.theme.text.size.large};
    font-family: ${(props) => (props.bold ? props.theme.text.font.corporateB : props.theme.text.font.corporate)};
    /* font-weight: ${(props) => (props.bold ? 'bold' : 'normal')}; */
    font-weight: 100;
    text-decoration-line: underline;
    text-decoration-color: ${(props) => (props.dGrey ? props.theme.color.text3 : props.theme.color.text5)};
    text-decoration-style: solid
    text-decoration-thickness:3px;
    @media (max-width: 612px) {
        font-size: ${(props) => props.theme.text.size.medium};
        width:auto;
        height:auto;
    }
    
`;
export const CartItemTitles = styled(span)`
    color: ${(props) => props.theme.color.text5};
    font-size: ${(props) => props.theme.text.size.large};
    font-weight: 500;
    float: left;
`;
export const CartIteminfo = styled(span)`
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.text4};
    font-stretch: expanded;
    font-size: ${(props) => props.theme.text.size.medium};
`;
export const CartItemLeftInfo = styled(span)`
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => (props.blue ? props.theme.color.button : (props) => props.theme.color.text2)};
    font-size: ${(props) => props.theme.text.size.hmedium};
    float: right;
    font-weight: bold;
`;

export const IconArrow = styled(RiArrowUpDownLine)`
    margin: auto 16px;
    color: ${(props) => props.theme.color.text5};
`;

export const RemoveIcon = styled(IoMdRemoveCircleOutline)`
    color: ${(props) => props.theme.color.text2};
    size: ${(props) => props.theme.text.size.medium};
    margin: auto auto auto 1px;
    float: right;
`;
export const AddIcon = styled(IoIosAddCircleOutline)`
    color: ${(props) => props.theme.color.button};
    float: right;
    margin: auto 0px auto 1px;
`;

export const TextButton = styled.button`
    cursor: pointer;
    background: ${(props) => props.theme.color.card};
    border: none;
    &:hover {
        background: ${(props) => props.theme.color.body};
    }
    margin: 0;
    padding: 0;
    margin-right: ${(props) => (props.mr ? '8px' : '2px')};} ;
    float: right;
`;
