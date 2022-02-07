import { CartKeys } from "../type";

const Initial_State = {
    items: {
        byId: {
            1: {
                id: "1",
                name: "Product 1",
                info: "Product 1 info",
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
    switch (action.type) {
        default:
            return state;
    }
};

//selectors
export const getCartItems = (state) => state.cart;
export const getCartTotal = (state) => state.total;
export const getItem = (state) => state.cart.items;
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
