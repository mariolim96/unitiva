import React, { useEffect } from "react";
import { StyledCard, Photo, Button, Title, Info, Price, Border, BlueCircle, RedCircle, Select } from "./card.styled";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/action/cartAction";
import { useSelector } from "react-redux";
import { getMeasures, getAddedMeasures, getPcsMeasures } from "../../redux/reducer/cartReducer";
function Card({ id, name, info, price, image }) {
    const measures = useSelector(getMeasures);
    const [val, setVal] = useState(-1);
    const dispatch = useDispatch();
    const quantity = useSelector(getPcsMeasures(id));
    const added = useSelector(getAddedMeasures(id));
    console.log(measures[id]);
    useEffect(() => {}, [quantity, added, measures]);

    const add = useCallback(() => {
        dispatch(addItem(id, val));
    }, [dispatch, id, val]);

    const measure = Object.keys(measures[id]).map((item) => {
        return (
            <>
                <option key={item} value={item} disabled={measures[id][item].pcs <= 0 ? true : false}>
                    {item}({measures[id][item].pcs}pcs)
                </option>
            </>
        );
    });
    return (
        <StyledCard>
            {added > 0 ? <BlueCircle>{added}</BlueCircle> : ""}
            {quantity === 1 ? <RedCircle>LAST</RedCircle> : ""}
            <Photo src={process.env.PUBLIC_URL + image} />
            <Border />
            <Title>{name}</Title>
            <Info>{info}</Info>
            <Price>Qty: {quantity}</Price>
            {quantity === 1 ? (
                <Price red tiny>
                    last item
                </Price>
            ) : quantity <= 3 ? (
                <Price red tiny>
                    last pieces available
                </Price>
            ) : (
                ""
            )}
            <br></br>
            <Price>Price: </Price>
            <Price bold>${price}</Price>
            <br></br>
            <div>
                {quantity > 0 ? (
                    <Select
                        onChange={(e) => {
                            setVal(e.target.value);
                        }}
                    >
                        <option value={-1} className="base">
                            Size
                        </option>
                        {measure}
                    </Select>
                ) : (
                    ""
                )}
                <Button
                    disabled={val < 0 || measures[id][val].pcs < 1}
                    onClick={(e) => {
                        add(val);
                    }}
                >
                    {quantity > 0 ? "Add" : "Added all"}
                </Button>
            </div>
        </StyledCard>
    );
}

export default Card;
/* <BlueCircle>{chosen}</BlueCircle>
            <RedCircle>LAST</RedCircle>
            <Photo src={process.env.PUBLIC_URL + "/rb.png"} />
            <Border />
            <Title>{title}</Title>
            <Info>{info}</Info>
            <Price>Qty:{qty}</Price>
            {qty === 1 ? <Price>last item</Price> : qty <= 3 ? <Price>3 left</Price> : ""}
            <br></br>
            <Price>Price: </Price>
            <Price bold>{price}</Price>
            <br></br>
            <div>
                <FormInput type="text" placeholder="Enter qty" />
                {qty === 0 ? (
                    <Button inactive> Add</Button>
                ) : chosen > 0 ? (
                    <Button inactive grey>
                        Add
                    </Button>
                ) : (
                    <Button>Add</Button>
                )}
            </div> */
