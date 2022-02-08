import React from "react";
import Header from "../components/header/header.js";
import Card from "../components/card/card.js";
import Footer from "../components/footer/footer.js";
import { ContainerCard } from "../components/cardCollection/cardCollection.styled.js";
import { useSelector } from "react-redux";
import { getItem } from "../redux/reducer/cartReducer.js";

const StoreProduct = () => {
    const items = useSelector(getItem);
    const itemCollection = Object.keys(items.byId).map((item) => {
        return <Card key={item} {...items.byId[item]} />;
    });
    return (
        <>
            <Header />
            <ContainerCard>{itemCollection}</ContainerCard>
            <Footer info="Go to Cart" />
        </>
    );
};

export default StoreProduct;
