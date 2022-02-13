import React, { useEffect } from "react";
import FooterContainer from "../components/footer/footer";
import Header from "../components/header/header";
import GreetingsContainer from "../components/greetingsContainer/greetingsContainer";
import { HeaderData } from "../data/headerData";
import { FooterData } from "../data/footerData";
import { useDispatch, useSelector } from "react-redux";
import { getMeasures } from "../redux/reducer/cartReducer";
import { clearItemCart } from "../redux/action/cartAction";

const StoreGreetings = () => {
    const dispatch = useDispatch();
    const measures = useSelector(getMeasures);
    useEffect(() => {
        dispatch(clearItemCart(measures));
    }, [measures, dispatch]);
    return (
        <>
            <Header {...HeaderData[2]}></Header>
            <GreetingsContainer></GreetingsContainer>
            <FooterContainer {...FooterData[2]}></FooterContainer>
        </>
    );
};

export default StoreGreetings;
