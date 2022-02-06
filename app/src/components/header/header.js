import React from "react";
import { Break, Nav, Container, Logo } from "./header.style";

function Header() {
    return (
        <>
            <Container>
                <Logo>STORE LOGO</Logo>
                <Nav>
                    <h2>LAST PRODUCT AVAILABLE</h2>
                    <h6>5 product avaible</h6>
                </Nav>
                <Break />
            </Container>
        </>
    );
}

export default Header;
