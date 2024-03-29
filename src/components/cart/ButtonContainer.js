import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAvailablePcs, cart } from '../../redux/reducer/cartReducer';
import { TextButton } from './cart.styled';
import { operationHandler } from '../../redux/action/cartAction';
import { CartKeys } from '../../redux/type';

function ButtonContainer(props) {
    const dispatch = useDispatch();
    const availablePcs = useSelector(getAvailablePcs(props.id, props.size));
    const cartItems = useSelector(cart);
    console.log();
    useEffect(() => {}, [availablePcs]);
    const button = (
        <TextButton
            mr
            data-id={props.id}
            onClick={(e) => {
                let idx = e.target.dataset.id;
                dispatch(operationHandler(props.type, cartItems[idx].id, cartItems[idx].size));
            }}
        >
            {props.children}
        </TextButton>
    );
    return <>{props.type === CartKeys.ADD ? availablePcs > 0 ? button : <div></div> : button}</>;
}
export default ButtonContainer;
