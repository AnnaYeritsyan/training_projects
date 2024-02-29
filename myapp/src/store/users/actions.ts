import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getPlaceholderData, postPlaceholderData } from "../../API/api";
import { usersActions } from "./config";
import { getWeatherByLocation } from "components/Weather/WeatherAPI/WeatherAPI";
import { fetchMovies } from "components/MoviePage/MovieApi/MovieApi";
// import { getWeather } from "components/Weather/WeatherAPI/WeatherAPI";

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


export const moviePostData =():ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const data = await fetchMovies();
        dispatch(usersActions.setPlaceholerData(data))
    } catch (error) {
        console.error('error fetching data', error);
    }
}