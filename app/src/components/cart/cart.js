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
import { getMeasures, getItem, cart, totalPrice, totalAddedProducts } from "../../redux/reducer/cartReducer";
import _ from "lodash";
import { nanoid } from "nanoid";
import { IconArrow } from "./cart.styled";
import { CartKeys } from "../../redux/type";
import { operationHandler } from "../../redux/action/cartAction";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cart);
    const price = useSelector(totalPrice);
    const totalProducts = useSelector(totalAddedProducts);
    console.log(price);
    useEffect(() => {}, [cartItems]);
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
                        data-id={i}
                        onClick={(e) => {
                            let idx = e.target.dataset.id;
                            dispatch(operationHandler(CartKeys.DELETE, cartItems[idx].id, cartItems[idx].size));
                        }}
                    >
                        <RemoveIcon data-id={i} size={18} />
                        <CartItemLeftInfo data-id={i}>Remove</CartItemLeftInfo>
                    </TextButton>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.info}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.size}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <TextButton
                        data-id={i}
                        data-size={item.size}
                        onClick={(e) => {
                            let idx = e.target.getAttribute("data-id");
                            dispatch(operationHandler(CartKeys.ADD, cartItems[idx].id, cartItems[idx].size));
                        }}
                    >
                        <AddIcon size={18} data-id={i} />
                        <CartItemLeftInfo blue data-id={i}>
                            Add
                        </CartItemLeftInfo>
                    </TextButton>
                    <CartIteminfo>{item.added}</CartIteminfo>
                </CartItem>
                <CartItem>
                    {item.price * item.added}
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
                <Header4 bold>{totalProducts}</Header4>
            </TextWrapper>
            <TextWrapper clear="right" padding="36px">
                <Header4 dGrey>Price: &nbsp; </Header4>
                <Header4 bold dGrey>
                    {price}
                </Header4>
            </TextWrapper>
        </CartContainer>
    );
};

export default Cart;
