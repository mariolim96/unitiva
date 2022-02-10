import { CartKeys } from "../type";
import _ from "lodash";
export const addItem = (id, size) => {
    return {
        type: CartKeys.ADD,
        payload: {
            id,
            size,
        },
    };
};

export const removeItem = (id, size) => {
    return {
        type: CartKeys.DELETE,
        payload: {
            id,
            size,
        },
    };
};

export const clearItemCart = (measures) => {
    const clearMeasures = _.forEach(measures, (item) => {
        _.forEach(item, (size) => {
            size.added = 0;
        })})
    return {
        type: CartKeys.CLEAR,
        payload: clearMeasures,};
};
