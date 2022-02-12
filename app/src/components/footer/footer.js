import React from "react";
import { FooterContainer, Info, TextWrapper, BackIcon, LeftButton, RightButton } from "./footer.styled";
import Link from "../../routing/Link";
import { useEffect } from "react";

function Footer({ nextPage, prevPage, backButton, nextPageUrl, prevPageUrl }) {
    useEffect(() => {}, [backButton]);
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
                <div>
                    0 product chosen
                    <Link href={nextPageUrl}>
                        <RightButton>
                            <Info>{nextPage}</Info>
                        </RightButton>
                    </Link>
                </div>
            </TextWrapper>
        </FooterContainer>
    );
}

export default Footer;
