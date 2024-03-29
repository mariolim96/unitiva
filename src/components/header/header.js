import React, { useEffect } from "react";
import { Break, Nav, Container1, Logo, LeftHeader, RightHeader } from "./header.style";
import { useSelector } from "react-redux";
import { totalAddedProducts, totalProducts } from "../../redux/reducer/cartReducer";
function Header({ leftText, rightText, logoText, productsType }) {
    const products = useSelector(productsType === "0" ? totalProducts : totalAddedProducts);
    useEffect(() => {}, [products]);
    return (
        <>
            <Container1>
                <Logo>{logoText}</Logo>
                <Nav>
                    <LeftHeader>{leftText}</LeftHeader>
                    <RightHeader>
                        {products} &nbsp;
                        {rightText}
                    </RightHeader>
                </Nav>
                <Break />
            </Container1>
        </>
    );
}

export default Header;
