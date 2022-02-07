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

function Card({ id, name, info, quantity, price, image, added }) {
    console.log(image);
    return (
        <StyledCard>
            {added !== false ? <BlueCircle>{added}</BlueCircle> : ""}
            {quantity === 1 ? <RedCircle>LAST</RedCircle> : ""}
            <Photo src={process.env.PUBLIC_URL + image} />
            <Border />
            <Title>{name}</Title>
            <Info>{info}</Info>
            <Price>Qty: {quantity}</Price>
            {quantity === 1 ? <Price red>last item</Price> : quantity <= 3 ? <Price>3 left</Price> : ""}
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
/* <BlueCircle>{chosen}</BlueCircle>
            <RedCircle>LAST</RedCircle>
            <Photo src={process.env.PUBLIC_URL + "/rb.png"} />
            <Border />
            <Title>{title}</Title>
            <Info>{info}</Info>
            <Price>Qty:{qty}</Price>
            {qty === 1 ? <Price>last item</Price> : qty <= 3 ? <Price>3 left</Price> : ""}
            <br></br>
            <Price>Price: </Price>
            <Price bold>{price}</Price>
            <br></br>
            <div>
                <FormInput type="text" placeholder="Enter qty" />
                {qty === 0 ? (
                    <Button inactive> Add</Button>
                ) : chosen > 0 ? (
                    <Button inactive grey>
                        Add
                    </Button>
                ) : (
                    <Button>Add</Button>
                )}
            </div> */
