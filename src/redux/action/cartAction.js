import { CartKeys } from '../type';
import _ from 'lodash';

export const operationHandler = (type, id, size) => {
    return {
        type: type,
        payload: {
            id,
            size,
        },
    };
};
//adding and removing items handler from cart

export const clearItemCart = (measures) => {
    const clearMeasures = _.forEach(measures, (item) => {
        _.forEach(item, (size) => {
            size.added = 0;
        });
    });
    return {
        type: CartKeys.CLEAR,
        payload: clearMeasures,
    };
};
