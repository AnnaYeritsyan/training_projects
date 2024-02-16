import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'


const UsersSelector = (state: RootState) => state.user
export const selectUser = createSelector(UsersSelector ,(state) => state.user)

export const selectPlaceholderData = createSelector(UsersSelector, state => state.placeHolderData)
