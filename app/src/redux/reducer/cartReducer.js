import { CartKeys } from "../type";

const Initial_State = {
    items: {
        byId: {
            1: {
                id: "1",
                name: "Ray-Ban wayfarer",
                info: "RBN82 83 95",
                quantity: 1,
                price: 10,
                image: "1.png",
                added: false,
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
            return {
                ...state,
                cart: [...state.cart, state.items.byId[action.payload.id]],
                total: state.total + state.items.byId[action.payload.id].price,
                items: {
                    ...state.items,
                    byId: {
                        ...state.items.byId,
                        [action.payload.id]: {
                            ...state.items.byId[action.payload.id],
                            quantity: action.payload.quantity,
                        },
                    },
                },
            };
        //removing item from cart and updating quantity
        case DELETE:
            return state;

        default:
            return state;
    }
};

// total: state.total + state.items.byId[action.payload.id].price,
//                 items: {
//                     ...state.items,
//                     byId: {
//                         ...state.items.byId,
//                         quantity: action.payload.quantity,
//                     },},
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
