import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'


const UsersSelector = (state: RootState) => state.user
export const selectUser = createSelector(UsersSelector ,(state) => state.user)

export const selectPlaceholderData = createSelector(UsersSelector, state => state.placeHolderData)
export const selectWeather = createSelector(UsersSelector, state=>state.weatherData)
export const selectMoviePlaceholderData = createSelector(UsersSelector, state => state.placeHolderData)
export const selectMovies = createSelector(UsersSelector, state => state.movies)