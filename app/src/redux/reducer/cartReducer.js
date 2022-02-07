import { CartKeys } from "../type";

const Initial_State = {
  items: {
    byId: {},
  },
    cart: [],
    total: 0,
};

//reducer
export default cartReducer (state = Initial_State, action) => {
  const {
   ADD,DELETE,CLEAR,
  } = CartKeys;
  switch (action.type) {
    default:
      return state;
  }
};

//selectors
export const getFilmsList = (state) => state.List.listCreating.filmList;
export const getTitleList = (state) => state.List.listCreating.title;
export const getDescriptionList = (state) =>
  state.List.listCreating.description;
export const getPrivateList = (state) => state.List.listCreating.private;

export const getListLists = (state) => state.List.listLists;
export const getListSelected = (state) => state.List.listSelected;
export const getFilms = (state) => state.List.films;
export const filteredFilms = (state) => {
  return state.List.listSelected[
    Object.keys(state.List.listSelected)[0]
  ].films.reduce((accum, film) => {
    accum[film] = state.List.films[film] ? state.List.films[film] : {};
    return accum;
  }, {});
};
export const getWatchlist = (state) => state.List.watchlist;
export const getFavorites = (state) => state.List.favourites;
