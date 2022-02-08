import styled, { keyframes } from "styled-components";

const lighten = (value) => styled.css`
    filter: brightness(${value + 1});
`;

const darken = (value) => styled.css`
    filter: brightness(${1 - value});
`;
export const StyledCard = styled.div`
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.color.border};
    margin: 18px 20px;
    border-radius: 8px;
    height: 230px;
    position: relative;
    min-width: 174px;
    background-color: ${(props) => props.theme.color.card};
    @media (max-width: 524px) {
        margin-right: auto;
    } ;
`;
export const Border = styled.div`
    width: 100%;
    height: 0px;
    border-top: 1px solid ${(props) => props.theme.color.border};
`;
export const Photo = styled.img`
    position: relative;
    border-radius: 8px;
    padding: 0;
    height: 42%;
    width: 100%;
    box-sizing: inherit;
    background-image: ${(props) => `url(${props.src})`};
    z-index: 0;
`;
export const Title = styled.h3`
    font-family: ${(props) => props.theme.text.font.corporateB};
    margin-top: 8px;
    margin-left: 6px;
    margin-bottom: 0px;
    padding: 0;
    font-size: ${(props) => props.theme.text.size.medium};
    color: ${(props) => props.theme.color.text1};
    font-weight: normal;
`;

export const Info = styled.h4`
    font-family: ${(props) => props.theme.text.font.corporate};
    margin: 0px auto 6px 6px;
    font-size: ${(props) => props.theme.text.size.small};
    color: ${(props) => props.theme.color.text3};
    font-weight: 200;
`;

export const Price = styled.h5`
    font-family: ${(props) => props.theme.text.font.corporate};
    margin: 4px 1px 4px 6px;
    display: inline-block;
    padding: 0;
    font-size: ${(props) => (props.tiny ? props.theme.text.size.tiny : props.theme.text.size.small)};
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => (props.red ? props.theme.color.text2 : props.theme.color.text3)};
    font-weight: ${(props) => (props.bold ? "900" : "normal")};
`;
export const Button = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    outline: none;
    background-color: ${(props) => props.theme.color.button};
    color: white;
    border-radius: 5px;
    border: none;
    padding: 6px 8px;
    font-size: ${(props) => props.theme.text.size.small};
    font-family: ${(props) => props.theme.text.font.corporate};
    font-weight: 100;
    min-width: 44px;
    float: right;
    margin: 6px 6px;
    height: 24px;
    transition: all 0.5s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background: #2c3e50;
        filter: brightness(115%);
    }
    &:active {
        background: #2c3e50;
        top: 2px;
    }
`;

export const FormInput = styled.input`
    display: inline-block;
    border-radius: 5px;
    margin: 6px 1px 6px 6px;
    height: 22px;
    width: 80px;
    padding: 0px 0px;
    border: 1px solid #cfcfcf;
    font-size: ${(props) => props.theme.text.size.small};
    padding-left: 8px;

    &:hover {
        filter: brightness(1.1);
    }
`;

export const Circle = styled.div`
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    z-index: 1;
    border: 1px solid ${(props) => props.theme.color.buttonDisabled};
    top: -12px;
    font-size: ${(props) => props.theme.text.size.tiny};
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.body};
    text-align: center;
    line-height: 26px;
`;

export const BlueCircle = styled(Circle)`
    background-color: ${(props) => props.theme.color.button};
    right: -12px;
`;
const lighing = keyframes`
    0% {
        filter: brightness(80%);
    }
    50% {filter: brightness(130%);}

    100% {
        filter: brightness(80%);
    }
`;
export const RedCircle = styled(Circle)`
    background-color: ${(props) => props.theme.color.circle};
    left: -12px;
    font-weight: 400;
    animation: ${lighing} 2s linear infinite;
`;
