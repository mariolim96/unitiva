import styled from "styled-components";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Span, Button } from "../../theme/global";

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 84px;
    background-color: white;
    border-top: 1px solid ${(props) => props.theme.color.borderF};
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;
export const Info = styled.h4`
    font-family: ${(props) => props.theme.text.font.corporate};
    margin: auto auto;
    font-size: ${(props) => props.theme.text.size.medium};
    color: white;
    font-weight: 200;
`;
export const SideInfo = styled.h4`
    display: inline-block;
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.text5};
    font-size: ${(props) => props.theme.text.size.medium};
    font-weight: 200;
    vertical-align: middle;
`;

export const BackIcon = styled(IoChevronBackCircleOutline)`
    color: ${(props) => props.theme.color.primary};
    /* margin: 8px 2px 0px 0px; */
    vertical-align: middle;
`;

export const TextWrapper = styled.div`
    box-sizing: content-box;
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    margin: Auto;
    text-align: left;
    vertical-align: middle
    padding-left: ${(props) => props.padding};
    padding-bottom: ${(props) => props.padding};
`;

export const LeftButton = styled(Span)`
    opacity: 1;
    align-text: center
    font-family: ${(props) => props.theme.text.font.corporate};
    color: ${(props) => props.theme.color.text5};
    font-size: 1.0rem; 
    font-weight: 100;
    min-width: 106px;
    float: right;
    /* padding: 6px 16px;*/
    text-align: center;
    margin: auto  32px auto 8px;
    vertical-align: middle;
`;
export const RightButton = styled(Button)`
    margin-left: 16px;
    &:disabled {
        background-color: ${(props) => props.theme.color.buttonB};
        cursor: not-allowed;
    }
`;
