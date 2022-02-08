import { CartKeys } from "../type";

const Initial_State = {
    items: {
        byId: {
            1: {
                id: "1",
                name: "Ray-Ban wayfarer",
                info: "RBN82 83 95",
                quantity: 21,
                price: 10,
                image: "1.png",
                added: 0,
            },
            2: {
                id: "2",
                name: "Ray-Ban wayfarer",
                info: "RBN82 83 95",
                quantity: 11,
                price: 10,
                image: "1.png",
                added: 0,
            },
            3: {
                id: "3",
                name: "Ray-Ban wayfarer",
                info: "RBN82 83 95",
                quantity: 11,
                price: 10,
                image: "1.png",
                added: 0,
            },
        },
    },
    cart: [],
    total: 0,
};

//reducer
// eslint-disable-next-line
export default (state = Initial_State, action) => {
    const { ADD, DELETE, CLEAR } = CartKeys;
    console.log(action);
    switch (action.type) {
        //adding item to cart and updating quantity
        case ADD:
            console.log(action.payload);
            const { id, quantity, pieces } = action.payload;
            return {
                ...state,
                cart: [...state.cart, state.items.byId[id]],
                total: state.total + state.items.byId[id].price,
                items: {
                    ...state.items,
                    byId: {
                        ...state.items.byId,
                        [action.payload.id]: {
                            ...state.items.byId[id],
                            quantity: quantity,
                            added: Number(state.items.byId[id].added) + Number(pieces),
                        },
                    },
                },
            };
        //removing item from cart and updating quantity
        case DELETE:
            return {
                ...state,
                cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
                total: state.total - state.items.byId[action.payload.id].price,
                items: {
                    ...state.items,
                    byId: {
                        ...state.items.byId,
                        [action.payload.id]: {
                            ...state.items.byId[action.payload.id],
                            quantity: state.items.byId[action.payload.id].quantity + action.payload.pieces,
                            added: state.items.byId[action.payload.id].added - action.payload.pieces,
                        },
                    },
                },
            };
        //clearing cart
        case CLEAR:
            return {
                ...state,
                cart: [],
                total: 0,
            };

        default:
            return state;
    }
};

//selectors
export const getCartItems = (state) => state.store.cart;
export const getCartTotal = (state) => state.store.total;
export const getItem = (state) => state.store.items;
// export const getFilmsList = (state) => state.List.listCreating.filmList;
// export const getTitleList = (state) => state.List.listCreating.title;
// export const getDescriptionList = (state) =>
//   state.List.listCreating.description;
// export const getPrivateList = (state) => state.List.listCreating.private;

// export const getListLists = (state) => state.List.listLists;
// export const getListSelected = (state) => state.List.listSelected;
// export const getFilms = (state) => state.List.films;
// export const filteredFilms = (state) => {
//   return state.List.listSelected[
//     Object.keys(state.List.listSelected)[0]
//   ].films.reduce((accum, film) => {
//     accum[film] = state.List.films[film] ? state.List.films[film] : {};
//     return accum;
//   }, {});
// };
// export const getWatchlist = (state) => state.List.watchlist;
// export const getFavorites = (state) => state.List.favourites;
