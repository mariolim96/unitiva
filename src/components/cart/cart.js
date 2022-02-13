import React from 'react';
import {
    CartContainer,
    CartGrid,
    CartItem,
    CartIteminfo,
    CartItemLeftInfo,
    AddIcon,
    RemoveIcon,
    Header4,
    CartItemTitles,
    Header,
    TextWrapper,
} from './cart.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cart, totalPrice, totalAddedProducts } from '../../redux/reducer/cartReducer';
import { nanoid } from 'nanoid';
import { IconArrow } from './cart.styled';
import { CartKeys } from '../../redux/type';
import { cartCategories } from '../../data/cartCategories';
import ButtonContainer from './ButtonContainer';
const Cart = () => {
    const cartItems = useSelector(cart);
    const price = useSelector(totalPrice);
    const totalProducts = useSelector(totalAddedProducts);

    const titles = cartCategories.map((item, i) => {
        return (
            <CartItem key={item} title>
                <CartItemTitles>{item}</CartItemTitles>
                {i === 0 || i === 4 ? <IconArrow size={22} /> : ''}
            </CartItem>
        );
    });
    const lastRow = [...Array(5)].map(() => {
        return <CartItem> </CartItem>;
    });
    const cartItemsList = cartItems.map((item, i) => {
        return (
            <>
                <CartItem key={nanoid()} id={item}>
                    <CartIteminfo>{item.name}</CartIteminfo>
                    <ButtonContainer id={item.id} size={item.size} type={CartKeys.DELETE}>
                        <RemoveIcon data-id={i} size={18} />
                        <CartItemLeftInfo data-id={i}>Remove</CartItemLeftInfo>
                    </ButtonContainer>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.info}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <CartIteminfo>{item.size}</CartIteminfo>
                </CartItem>
                <CartItem>
                    <ButtonContainer id={item.id} size={item.size} type={CartKeys.ADD}>
                        <AddIcon size={18} data-id={i} />
                        <CartItemLeftInfo blue data-id={i}>
                            Add
                        </CartItemLeftInfo>
                    </ButtonContainer>
                    <CartIteminfo>{item.added}</CartIteminfo>
                </CartItem>
                <CartItem>
                    {item.price * item.added}
                    <CartIteminfo></CartIteminfo>
                </CartItem>
            </>
        );
    });
    useEffect(() => {}, [cartItems]);
    return (
        <CartContainer>
            <Header>Your cart contains:</Header>
            <CartGrid>
                {titles}
                {cartItemsList}
                {lastRow}
            </CartGrid>
            <TextWrapper>
                <Header4>Total pieces:&nbsp;&nbsp;</Header4>
                <Header4 bold>{totalProducts}</Header4>
            </TextWrapper>
            <TextWrapper clear='right' padding='36px'>
                <Header4 dGrey>Price: &nbsp; </Header4>
                <Header4 bold dGrey>
                    {price}
                </Header4>
            </TextWrapper>
        </CartContainer>
    );
};

export default Cart;
