import { ListKeys } from "./types";
// import normalize from "../helpers/apiNormalizer";
// import cinemate, { Requests } from "../api/cinemate";
// const { FilmToList, list } = Requests;

// export const addFilm = (filmObj, db) => (dispatch) => {
//     const { PUSH } = ListKeys;
//     if (!db) dispatch({ type: PUSH, payload: filmObj });
// };
// export const selectList = (listObj, id) => (dispatch) => {
//     const { SELECT } = ListKeys;
//     dispatch({ type: SELECT, payload: { [id]: listObj } });
// };
// export const getUserLists = () => async (dispatch) => {
//     const { FETCH_LIST } = ListKeys;
//     const response = await cinemate.get(Requests.userList);
//     let normalizedData = normalize(response.data, "list");
//     if (response.status === 200) {
//         dispatch({ type: FETCH_LIST, payload: normalizedData });
//         return;
//     }
// };

// export const getUserWatchlist = () => async (dispatch) => {
//     const { SET_DEFAULT } = ListKeys;
//     const response = await cinemate.get(Requests.watchlist);
//     let normalizedData = normalize(response.data, "list");

//     if (response.status === 200) {
//         dispatch({ type: SET_DEFAULT, payload: normalizedData, default: "watchlist" });

//         return;
//     }
// };

// export const getUserFavourites = () => async (dispatch) => {
//     const { SET_DEFAULT } = ListKeys;
//     const response = await cinemate.get(Requests.favorites);
//     let normalizedData = normalize(response.data, "list");

//     if (response.status === 200) {
//         dispatch({ type: SET_DEFAULT, payload: normalizedData, default: "favorites" });

//         return;
//     }
// };

// export const getPreviews = (previews) => async (dispatch, getState) => {
//     const { SET_FILM_DATA } = ListKeys;
//     previews.map(async (id) => {
//         const response = await tmdb.get(`/movie/${id}`, {
//             params: {
//                 language: "it",
//             },
//         });
//         if (response.data.poster_path !== null) {
//             response.data.poster_path = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
//         }
//         dispatch({ type: SET_FILM_DATA, payload: response.data });
//     });
// };

// export const add_list = (title, description, privateList, films, ) => async (dispatch, getState) => {
//     //let filmsList= Object.keys(getState().List.listCreating.films).map(key=>getState().List.listCreating.films[key].id)
//     //var filmList = getState().List.listCreating.filmList.map(film=>film.id)

//     await cinemate
//         .post(Requests.oneList, {
//                 title: title,
//                 description: description,
//                 private_list: privateList,
//                 films: getState().List.listCreating.filmList.map((film) => film.id),
//         })
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// export const addOrRemoveFilmToList = (filmId, listId, method) => async (dispatch) => {
//     switch (method) {
//         case "POST":
//             await cinemate
//                 .post(FilmToList, {
//                         film_id: filmId,
//                         list_id: listId,
//                 })
//                 .then((response) => {
//                     console.log(response);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//             break;
//         case "DELETE":
//             await cinemate
//                 .delete(FilmToList, {
//                     data: {
//                             film_id: filmId,
//                             list_id: listId,
//                     },
//                 })
//                 .then((response) => {
//                     console.log(response);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//             break;
//         default:
//             console.assert("wrong request");
//     }
// };
