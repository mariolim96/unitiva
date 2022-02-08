import { CartKeys } from "../type";
export const addItem = (id, quantity,pieces) => {
    console.log(id, quantity);

    return {
        type: CartKeys.ADD,
        payload: {
            id,
            quantity,
            pieces,
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
