import { CartKeys } from "../type";
export const addItem = (id, quantity) => {
    console.log(id, quantity);

    return {
        type: CartKeys.ADD,
        payload: {
            id,
            quantity,
        },
    };
};

export const removeItem = (id, quantity) => {
    return {
        type: CartKeys.DELETE,
        payload: {
            id,
            quantity,
        },
    };
};

export const clearItemCart = () => {
    return {
        type: CartKeys.CLEAR,
    };
};
