import React, { useEffect } from "react";
import { StyledCard, Photo, Button, Title, Info, Price, Border, FormInput, BlueCircle, RedCircle } from "./card.styled";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CartKeys } from "../../redux/type";
import { addItem } from "../../redux/action/cartAction";
import { useSelector } from "react-redux";
import { getCartItems, getItem } from "../../redux/reducer/cartReducer";
function Card({ id, name, info, quantity, price, image, added }) {
    const cartitems = useSelector(getCartItems);
    const [val, setVal] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {}, [quantity]);
    const add = useCallback(
        (pieces) => {
            const newQuantity = quantity - pieces;
            if (newQuantity >= 0) {
                dispatch(addItem(id, newQuantity));
            }
        },
        [dispatch, id, quantity]
    );

    return (
        <StyledCard>
            {added !== false ? <BlueCircle>{added}</BlueCircle> : ""}
            {quantity === 1 ? <RedCircle>LAST</RedCircle> : ""}
            <Photo src={process.env.PUBLIC_URL + image} />
            <Border />
            <Title>{name}</Title>
            <Info>{info}</Info>
            <Price>Qty: {quantity}</Price>
            {quantity === 1 ? (
                <Price red tiny>
                    last item
                </Price>
            ) : quantity <= 3 ? (
                <Price red tiny>
                    last pieces available
                </Price>
            ) : (
                ""
            )}
            <br></br>
            <Price>Price: </Price>
            <Price bold>${price}</Price>
            <br></br>
            <div>
                {quantity === 1 ? (
                    <FormInput
                        type="text"
                        placeholder="quantity"
                        onChange={(e) => {
                            setVal(e.target.value);
                        }}
                    />
                ) : (
                    ""
                )}
                {quantity > 0 ? (
                    <Button
                        onClick={(e) => {
                            add(val);
                        }}
                    >
                        Add
                    </Button>
                ) : (
                    <Button>Added all</Button>
                )}
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
