import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Cart from "../components/cart/cart";
import { HeaderData } from "../data/headerData";
import { FooterData } from "../data/footerData";
const StoreCart = () => {
    // useEffect(() => {
    //     refetchEvent()
    //    }, [])
    return (
        <>
            <Header {...HeaderData[1]}/>
            <Cart />
            <Footer {...FooterData[1]}></Footer>;
        </>
    );
};

export default StoreCart;
