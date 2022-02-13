import React from "react";
import { ContainerStyled, ButtonStyled, Header3, Info } from "./greetingsContainer.styled";
import { history } from "../../routing/Link";
function GreeTingsContainer() {
    return (
        <ContainerStyled>
            <Header3>Thank you!</Header3>
            <Header3>Your order will be shipped soon</Header3>
            <ButtonStyled
                onClick={() => {
                    history("/");
                }}
            >
                <Info>Buy more</Info>
            </ButtonStyled>
        </ContainerStyled>
    );
}

export default GreeTingsContainer;
