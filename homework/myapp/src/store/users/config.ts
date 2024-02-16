import { userSlice } from './users.slice'
import * as actions from './actions'
import * as selectors from './selectors'

export const usersActions = {
    ...userSlice.actions,
    ...actions
}


export const userSelectors = {
    ...selectors
}