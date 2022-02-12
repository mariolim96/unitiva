import React from "react";
import {
    CartContainer,
    CartGrid,
    CartItem,
    CartIteminfo,
    CartItemLeftInfo,
    AddIcon,
    RemoveIcon,
    TextButton,
    Header4,
    CartItemTitles,
    Header,
    TextWrapper,
} from "./cart.styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeasures, getItem, cart } from "../../redux/reducer/cartReducer";
import _ from "lodash";
import { nanoid } from "nanoid";
import { IconArrow } from "./cart.styled";
const Cart = () => {
    const dispatch = useDispatch();
    const measures = useSelector(getMeasures);
    const items = useSelector(getItem);
    const cartItems = useSelector(cart);
    // console.log(cart);
    const cartCategories = ["Model", "SKU", "Size", "Qty", "Price"].map((item, i) => {
        return (
            <CartItem key={item} title>
                <CartItemTitles>{item}</CartItemTitles>
                {i === 0 || i === 4 ? <IconArrow size={22} /> : ""}
            </CartItem>
        );
    });
    const lastRow = [...Array(5)].map(() => {
        return <CartItem>{""} </CartItem>;
    }); //                                      value    id
    const cartItemsList = cartItems.map((item, i) => {
        return (
            <>
                <CartItem key={nanoid()} id={item}>
                    <CartIteminfo>{item.name}</CartIteminfo>
                    <TextButton
                        mr
                        data-set={i}
                        
                    >
                        <RemoveIcon size={18} />
                        <CartItemLeftInfo>Remove</CartItemLeftInfo>
                    </TextButton>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.info}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.added}</CartIteminfo>
                    <TextButton
                        data-set={i}
                        onClick={(e) => {
                            console.log(e, e.target.getAttribute("data-set"));
                        }}
                    >
                        <AddIcon size={18} data-set={i} />
                        <CartItemLeftInfo blue data-set={i}>
                            Add
                        </CartItemLeftInfo>
                    </TextButton>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.price * item.added}</CartIteminfo>
                </CartItem>
                <CartItem>
                    {item.size}
                    <CartIteminfo></CartIteminfo>
                </CartItem>
            </>
        );
    });
    return (
        <CartContainer>
            <Header>Your cart contains:</Header>
            <CartGrid>
                {cartCategories}
                {cartItemsList}
                {lastRow}
            </CartGrid>
            <TextWrapper>
                <Header4>Total pieces:&nbsp;&nbsp;</Header4>
                <Header4 bold>354</Header4>
            </TextWrapper>
            <TextWrapper clear="right" padding="36px">
                <Header4 dGrey>Price: &nbsp; </Header4>
                <Header4 bold dGrey>
                    123
                </Header4>
            </TextWrapper>
        </CartContainer>
    );
};

export default Cart;
