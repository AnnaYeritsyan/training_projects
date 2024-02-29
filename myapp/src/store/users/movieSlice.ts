import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchMoviesFromAPI } from "../../components/MoviePage/MovieApi/MovieApi"; // Import your API function for fetching movies
import { setMovies } from "../slices/moviesSlice"; // Import the setMovies action creator from your movies slice

export const fetchMovies = (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
        const movies = await fetchMoviesFromAPI(); // Call your API function to fetch movies
        dispatch(setMovies(movies)); // Dispatch the setMovies action with the fetched movies
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};
