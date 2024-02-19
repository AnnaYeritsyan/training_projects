import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getPlaceholderData, postPlaceholderData } from "../../API/api";
import { usersActions } from "./config";
import { getWeather } from "components/Weather/WeatherAPI/WeatherAPI";

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

export const weatherData = ():ThunkAction<void, RootState, unknown, any>=>async(dispatch)=>{
    try{
        const data=await getWeather();
        dispatch(usersActions.weatherData(data)) 
    }
    catch(error){
        console.log('catch error')
    }
}
