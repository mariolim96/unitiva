import { CartKeys } from '../type';
import _ from 'lodash';
const Initial_State = {
    items: {
        byId: {
            1: {
                id: '1',
                name: 'Ray-Ban Wayfarer',
                info: 'RBN82 84 95',
                price: 76,
                image: '1.png',
            },
            2: {
                id: '2',
                name: 'Ray-Ban Round',
                info: 'RBN82 56 95',
                price: 90,
                image: '2.png',
            },
            3: {
                id: '3',
                name: 'Ray-Ban Clubmaster',
                info: 'RBN82 01 95',
                price: 100,
                image: '3.png',
            },
            4: {
                id: '4',
                name: 'Ray-Ban Aviator',
                info: 'RBN82 87 32',
                price: 104,
                image: '4.png',
            },
        },
    },
    //id of sunglasses with quantity and measures
    measures: {
        1: {
            50: { size: 50, pcs: 5, added: 0 },
            52: { size: 52, pcs: 1, added: 0 },
        },
        2: {
            48: { size: 48, pcs: 1, added: 0 },
            52: { size: 52, pcs: 4, added: 0 },
        },
        3: {
            50: { size: 50, pcs: 1, added: 0 },
            54: { size: 54, pcs: 4, added: 0 },
        },
        4: {
            50: { size: 50, pcs: 7, added: 0 },
            52: { size: 52, pcs: 2, added: 0 },
        },
    },
    total: 0,
};

//reducer
// eslint-disable-next-line
export default (state = Initial_State, action) => {
    const { ADD, DELETE, CLEAR } = CartKeys;

    switch (action.type) {
        //adding item to cart and updating quantity

        case ADD:
            return {
                ...state,
                total: state.total + state.items.byId[action.payload.id].price,
                measures: {
                    ...state.measures,
                    [action.payload.id]: {
                        ...state.measures[action.payload.id],
                        [action.payload.size]: {
                            ...state.measures[action.payload.id][action.payload.size],
                            pcs: state.measures[action.payload.id][action.payload.size].pcs - 1,
                            added: state.measures[action.payload.id][action.payload.size].added + 1,
                        },
                    },
                },
            };
        //removing item from cart and updating quantity
        case DELETE:
            return {
                ...state,
                total: state.total - state.items.byId[action.payload.id].price,
                measures: {
                    ...state.measures,
                    [action.payload.id]: {
                        ...state.measures[action.payload.id],
                        [action.payload.size]: {
                            ...state.measures[action.payload.id][action.payload.size],
                            pcs: state.measures[action.payload.id][action.payload.size].pcs + 1,
                            added: state.measures[action.payload.id][action.payload.size].added - 1,
                        },
                    },
                },
            };
        //clearing all added measures and reduce the pcs to the initial state
        case CLEAR:
            return {
                ...state,
                measures: action.payload,
            };
        default:
            return state;
    }
};

//selectors
export const cart = (state) => {
    const res = _.map(state.store.items.byId, (item, i) =>
        _.map(state.store.measures[i], (id) => Object.assign({}, item, id)).flat()
    );
    return res.flat().filter((item) => item.added > 0);
};
export const getCartTotal = (state) => state.store.total;
export const getItem = (state) => state.store.items;
export const getMeasures = (state) => state.store.measures;
export const getAvailablePcs = (id, size) => (state) => state.store.measures[id][size].pcs;
export const getPcsMeasures = (id) => (state) =>
    _.map(state.store.measures[id], (measure) => measure.pcs).reduce((a, b) => a + b);
export const getAddedMeasures = (id) => (state) =>
    _.map(state.store.measures[id], (measure) => measure.added).reduce((a, b) => a + b);
export const totalProducts = (state) => _.map(state.store.items.byId).length;

export const totalAddedProducts = (state) => {
    const res = _.map(state.store.measures, (measures) => {
        return _.map(measures, (measure) => {
            return measure.added;
        }).reduce((a, b) => a + b);
    });
    return res.reduce((a, b) => a + b);
};

export const totalPrice = (state) => {
    const res = _.map(state.store.items.byId, (item, i) =>
        _.map(state.store.measures[i], (id) => Object.assign({}, item, id)).flat()
    )
        .flat()
        .map((item) => item.price * item.added)
        .reduce((a, b) => a + b);
    return res;
};

export const totalProductTypeAdded = (state) => {
    let itemsIds = [];
    Object.keys(state.store.measures).forEach((id) => {
        Object.keys(state.store.measures[id]).forEach((size) => {
            return state.store.measures[id][size].added > 0
                ? itemsIds.findIndex((item) => item === id) < 0
                    ? itemsIds.push(id)
                    : null
                : null;
        });
    });
    return itemsIds.length;
};
