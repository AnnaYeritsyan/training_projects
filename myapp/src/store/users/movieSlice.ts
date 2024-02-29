import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchMoviesFromAPI } from "../../components/MoviePage/MovieApi/MovieApi";

export const fetchMovies = (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const movies = await fetchMoviesFromAPI();
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};
