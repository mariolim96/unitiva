import { ListKeys } from "./../redux_actions/types";

const Initial_State = {
  listLists: {
    byId: {},
  },
  watchlist: {},
  favourites: {},
  listSelected: {
    0: {
      description: " ",
      films: [],
      title: " ",
      id: 0,
      private: true,
    },
  },
  listCreating: { filmList: [], title: "", description: "", private: false },
  films: {},
};

//reducer
export default (state = Initial_State, action) => {
  const {
    PUSH,
    POP,
    CLEAR,
    SELECT,
    FETCH_LIST,
    SET_DEFAULT,
    SET_FILM_DATA,
    SET_DESCRITPION,
    SET_PRIVATE,
    SET_TITLE,
    CLEAR_NEW_LIST,
  } = ListKeys;
  switch (action.type) {
    case SELECT:
      return { ...state, listSelected: action.payload };
    case PUSH:
      return {
        ...state,
        listCreating: {
          ...state.listCreating,
          filmList: [...state.listCreating.filmList, action.payload],
        },
      };
    case POP:
      return {
        ...state,
        listCreating: {
          ...state.listCreating,
          filmList: state.listCreating.filmList.filter(
            (film) => film !== action.payload
          ),
        },
      };

    case FETCH_LIST:
      return {
        ...state,
        listLists: {
          ...state.listLists,
          byId: action.payload.entities.list,
        },
        films: action.payload.entities.films,
      };
    case SET_DEFAULT:
      switch (action.default) {
        case "watchlist":
          return {
            ...state,
            watchlist: action.payload.entities.list,
            listSelected: action.payload.entities.list,
            films: action.payload.entities.films,
          };
        case "favorites":
          return {
            ...state,
            favourites: action.payload.entities.list,
            listSelected: action.payload.entities.list,
            films: action.payload.entities.films,
          };
        default:
          return state;
      }
    case CLEAR:
      return { ...state, listLists: Initial_State.listLists };
    case SET_FILM_DATA:
      return {
        ...state,
        films: { ...state.films, [action.payload.id]: action.payload },
      };
    case SET_TITLE:
      return {
        ...state,
        listCreating: {
          ...state.listCreating,
          title: action.payload,
        },
      };
    case SET_DESCRITPION:
      return {
        ...state,
        listCreating: {
          ...state.listCreating,
          description: action.payload,
        },
      };
    case SET_PRIVATE:
      return {
        ...state,
        listCreating: {
          ...state.listCreating,
          private: !state.listCreating.private,
        },
      };
    case CLEAR_NEW_LIST:
      return {
        ...state,
        listCreating: Initial_State.listCreating,
      };
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
