import React from "react";
import Header from "../components/header/header.js";
import Card from "../components/card/card.js";
import Footer from "../components/footer/footer.js";
import { ContainerCard } from "../components/cardCollection/cardCollection.styled.js";
import { useSelector } from "react-redux";
import { getItem } from "../redux/reducer/cartReducer.js";
import { nanoid } from "nanoid";
import { footerData } from "../data/footerData";
const StoreProduct = () => {
    const items = useSelector(getItem);
    const itemCollection = Object.keys(items.byId).map((item) => {
        return <Card key={nanoid()} {...items.byId[item]} />;
    });
    return (
        <>
            <Header />
            <ContainerCard>{itemCollection}</ContainerCard>
            <Footer {...footerData[0]} />
        </>
    );
};

export default StoreProduct;
