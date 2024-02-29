import {ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {getPlaceholderData, postPlaceholderData} from "../../API/api";
import {usersActions} from "./config";
import {addNewMovieApi, fetchMoviesFromAPI} from "components/MoviePage/MovieApi/MovieApi";
import {MovieDTO} from "./users.slice";


export const  fetchPlaceholderData = ():ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await getPlaceholderData();
        dispatch(usersActions.setPlaceholerData(data))
    } catch (error) {
        console.error('error fetching data', error);
    }
}


export const fetchPostData = ():ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await postPlaceholderData();
        dispatch(usersActions.setPlaceholerData(data))
    } catch (error) {
        console.error('error fetching data', error);
    }
}

// export const weatherData = (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
//     try {
//         const data = await getWeatherByLocation();
//         dispatch(usersActions.weatherData()); 
//     } catch (error) {
//         console.error('Error fetching weather data', error);
//     }
// };


export const getMovies =():ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await fetchMoviesFromAPI();
        dispatch(usersActions.setMovies(data))
    } catch (error) {
        console.error('error fetching data', error);
    }
}


export const addNewMovie = (newMovie: MovieDTO):ThunkAction<void, RootState, unknown, any>=> async (dispatch) => {
    try {
        const response = await addNewMovieApi(newMovie);
        dispatch(usersActions.setNewMovie(response))
    } catch(err) {

    }
}