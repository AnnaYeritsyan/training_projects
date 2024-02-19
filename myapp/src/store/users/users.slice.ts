
import { createSlice } from '@reduxjs/toolkit'
export type PlaceHolderItem =
    {
        id: number,
        name: string,
        username: string,
        email: string,
        data:any,
    }
type InitialState = {
    user: null | string,
    placeHolderData: Array<PlaceHolderItem>,
    weatherData:Array<PlaceHolderItem>
}
const initialState: InitialState = {
    user: null,
    placeHolderData: [],
    weatherData:[],
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
        addPlaceholderData:(state, action)=>{
            return{
                ...state,
                placeHolderData:action.payload
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
        weatherData:(state, action)=>{
            return{
                ...state,
                weatherData:action.payload
            }
        }
    }
})