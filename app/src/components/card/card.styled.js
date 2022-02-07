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
    min-width: 178px;
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
    font-family: ${(props) => props.theme.text.font.family};
    margin-top: 4px;
    margin-left: 6px;
    margin-bottom: 0px;
    padding: 0;
    font-size: ${(props) => props.theme.text.size.medium};
    color: ${(props) => props.theme.color.text3};
    font-weight: normal;
`;
export const Info = styled.h4`
    font-family: ${(props) => props.theme.text.font.family};
    margin: 0px auto 6px 6px;
    font-size: ${(props) => props.theme.text.size.small};
    color: ${(props) => props.theme.color.text3};
    font-weight: normal;
`;

export const Price = styled.h5`
    font-family: ${(props) => props.theme.text.font.family};
    margin: 4px 1px 4px 6px;
    display: inline-block;
    padding: 0;
    font-size: ${(props) => props.theme.text.size.small};
    font-family: ${(props) => props.theme.text.font.family};
    color: ${(props) => props.theme.color.text3};
    font-weight: ${(props) => (props.bold ? "600" : "normal")};
`;
export const Button = styled.button`
    background-color: ${(props) => props.theme.color.button};
    color: white;
    border-radius: 5px;
    border: none;
    padding: 6px 8px;
    font-size: ${(props) => props.theme.text.size.small};
    font-family: ${(props) => props.theme.text.font.family};
    fotn-weight: 200;
    min-width: 44px;
    float: right;
    margin: 6px 6px;
    height: 24px;
    transition: all 0.5s ease-in-out;
    trasform: scale(1.85);
    &:hover {
        filter: brightness(115%);
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

// create a circle with black border positioned on top right corner of the photo
export const Circle = styled.div`
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    z-index: 1;
    border: 1px solid ${(props) => props.theme.color.buttonDisabled};
    top: -12px;
    font-size: ${(props) => props.theme.text.size.tiny};
    font-family: ${(props) => props.theme.text.font.family};
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

export const Bu = styled.button`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.87);
    background-color: rgb(144, 202, 249);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

// export const circle = styled.div`
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background-color: ${(props) => props.theme.color.body};
//     position: absolute;
//     top: 0;
//     left: 0;
// `;
