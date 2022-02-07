import React from "react";
import {
    Bu,
    StyledCard,
    Photo,
    Button,
    Title,
    Info,
    Price,
    Border,
    FormInput,
    BlueCircle,
    RedCircle,
} from "./card.styled";

function Card() {
    return (
        <StyledCard>
            <BlueCircle>1</BlueCircle>
            <RedCircle>LAST</RedCircle>
            <Photo src={process.env.PUBLIC_URL + "/rb.png"} />
            <Border />
            <Title>Ray-Ban Wayfarer</Title>
            <Info>RB103859</Info>
            <Price>Qty: 1</Price>
            <Price>last item</Price>
            <br></br>
            <Price>Price: </Price>
            <Price bold>$134.00</Price>
            <br></br>
            <div>
                <FormInput type="text" placeholder="Enter qty" />
                <Button>Add</Button>
            </div>
        </StyledCard>
    );
}

export default Card;
