import React from "react";
import { Break, Nav, Container1, Logo, LeftHeader, RightHeader } from "./header.style";

function Header() {
    return (
        <>
            <Container1>
                <Logo>STORE LOGO</Logo>
                <Nav>
                    <LeftHeader>LAST PRODUCT AVAILABLE</LeftHeader>
                    <RightHeader>5 product available</RightHeader>
                </Nav>
                <Break />
            </Container1>
        </>
    );
}

export default Header;
