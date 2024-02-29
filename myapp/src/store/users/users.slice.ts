import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type PlaceHolderItem =
    {
        id: number,
        name: string,
        username: string,
        email: string,
        data: any,
    }
export  type MovieDTO = {
    id: string;
    title: string;
    description: string;
    year: number | null;
    country: string;
    rating: number;
    genres: string[];
    actors: string[];
    imageUrl: string;
    videoUrl: string;
}

type InitialState = {
    user: null | string,
    placeHolderData: Array<PlaceHolderItem>,
    weatherData: Array<PlaceHolderItem>,
    movies: Array<MovieDTO>
}
const initialState: InitialState = {
    user: null,
    placeHolderData: [],
    weatherData: [],
    movies: []
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updatePlaceholderData: (state, action) => {
            return {
                ...state,
                placeHolderData: state.placeHolderData.map(item => item.id === action.payload.id ? action.payload : item)
            }
        },
        setPlaceholerData: (state, action) => {
            return {
                ...state,
                placeHolderData: action.payload
            }
        },
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        weatherData: (state, action) => {
            return {
                ...state,
                weatherData: action.payload
            }
        },
        setMovies: (state, action: PayloadAction<Array<MovieDTO>>) => {
            return {
                ...state,
                movies: action.payload
            }
        },
        setNewMovie: (state, action: PayloadAction<MovieDTO>) => {
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        }
    }
})