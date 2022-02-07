import React from "react";
import Header from "../components/header/header.js";
import Card from "../components/card/card.js";
import { ContainerCard } from "../components/cardCollection/cardCollection.styled.js";
const StoreProduct = () => {
    return (
        <>
            <Header />
            <ContainerCard>
                <Card />
                <Card />
                <Card />
            </ContainerCard>
        </>
    );
};

export default StoreProduct;
