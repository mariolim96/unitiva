import React from "react";
import { CartContainer, CartGrid, CartItem, CartIteminfo } from "./cart.styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeasures, getItem, cart } from "../../redux/reducer/cartReducer";
import _ from "lodash";
import { nanoid } from "nanoid";
import { CartItemTitles, Header } from "./cart.styled";
import { RiArrowUpDownLine } from "react-icons/ri";

const Cart = () => {
    const dispatch = useDispatch();
    const measures = useSelector(getMeasures);
    const items = useSelector(getItem);
    const cartItems = useSelector(cart);
    // console.log(cart);
    const cartCategories = ["Model", "Sku", "Size", "Qty", "Price"].map((item) => {
        return (
            <CartItem key={item} title>
                <CartItemTitles>{item}</CartItemTitles>
            </CartItem>
        );
    });
    const lastRow = [...Array(5)].map(() => {
        return <CartItem>{""} </CartItem>;
    }); //                                      value    id
    console.log(cartItems);
    const cartItemsList = cartItems.map((item) => {
        return (
            <>
                <CartItem key={nanoid()} id={item}>
                    <CartIteminfo>{item.name}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.info}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.added}</CartIteminfo>
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
            <h1>total pieces</h1>
            <h1>price:</h1>
        </CartContainer>
    );
};

export default Cart;
