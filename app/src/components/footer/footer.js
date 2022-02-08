import React from "react";
import { FooterContainer, Info } from "./footer.styled";
import { Button } from "../../global";
function Footer({ nextPage, prevPage, info }) {
    return (
        <FooterContainer>
            <Button>
                <Info>{info}</Info>
            </Button>
        </FooterContainer>
    );
}

export default Footer;
