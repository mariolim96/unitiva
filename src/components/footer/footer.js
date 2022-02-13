import React from "react";
import {
    FooterContainer,
    Info,
    TextWrapper,
    BackIcon,
    LeftButton,
    ButtonContainer,
    RightButton,
    SideInfo,
} from "./footer.styled";
import Link, { history } from "../../routing/Link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { totalProductTypeAdded } from "../../redux/reducer/cartReducer";
function Footer({ nextPage, prevPage, backButton, nextPageUrl, prevPageUrl, sideInfo }) {
    const totalAdded = useSelector(totalProductTypeAdded);
    var active = sideInfo ? (totalAdded > 0 ? false : true) : false;

    useEffect(() => {}, [backButton, totalAdded, active]);

    return (
        <FooterContainer>
            <TextWrapper>
                {backButton === true ? (
                    <>
                        <LeftButton>
                            <Link href={prevPageUrl}>
                                <BackIcon size={22} />
                                {prevPage}
                            </Link>
                        </LeftButton>
                    </>
                ) : (
                    <div></div>
                )}
                <ButtonContainer>
                    {sideInfo ? <SideInfo> {totalAdded} product chosen</SideInfo> : <div></div>}
                    <RightButton
                        disabled={active}
                        onClick={() => {
                            history(nextPageUrl);
                        }}
                    >
                        <Info>{nextPage}</Info>
                    </RightButton>
                </ButtonContainer>
            </TextWrapper>
        </FooterContainer>
    );
}

export default Footer;
