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
import Link from "../../routing/Link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { totalProductTypeAdded } from "../../redux/reducer/cartReducer";
function Footer({ nextPage, prevPage, backButton, nextPageUrl, prevPageUrl }) {
    const totalAdded = useSelector(totalProductTypeAdded);
    useEffect(() => {}, [backButton, totalAdded]);
    console.log(totalAdded);

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
                    <SideInfo> {totalAdded} product chosen</SideInfo>

                    {totalAdded > 0 ? (
                        <Link href={nextPageUrl}>
                            <RightButton>
                                <Info>{nextPage}</Info>
                            </RightButton>
                        </Link>
                    ) : (
                        <RightButton disabled="true">
                            <Info>{nextPage}</Info>
                        </RightButton>
                    )}
                </ButtonContainer>
            </TextWrapper>
        </FooterContainer>
    );
}

export default Footer;
