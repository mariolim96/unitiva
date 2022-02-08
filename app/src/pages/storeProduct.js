import React from "react";
import Header from "../components/header/header.js";
import Card from "../components/card/card.js";
import { ContainerCard } from "../components/cardCollection/cardCollection.styled.js";
import { useSelector } from "react-redux";
import { getItem } from "../redux/reducer/cartReducer.js";
import { useStore } from "react-redux";

const StoreProduct = () => {
    const items = useSelector(getItem);
    const store = useStore();
    // console.log(store.getState(), items);
    const itemCollection = Object.keys(items.byId).map((item) => {
        return <Card key={item} {...items.byId[item]} />;
    });
    return (
        <>
            <Header />
            <ContainerCard>{itemCollection}</ContainerCard>
        </>
    );
};

export default StoreProduct;
