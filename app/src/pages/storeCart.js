import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Cart from "../components/cart/cart";
import { footerData } from "../data/footerData";
import { useEffect } from "react";
const StoreCart = () => {
    // useEffect(() => {
    //     refetchEvent()
    //    }, [])
    return (
        <>
            <Header />
            <Cart />
            <Footer {...footerData[1]}></Footer>;
        </>
    );
};

export default StoreCart;
