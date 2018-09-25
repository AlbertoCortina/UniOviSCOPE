import { combineReducers } from 'redux'
import isLoadingAppReducer from './isLoadingApp-reducer'
import userDataReducer from './userData-reducer'
import errorReducer from './error-reducer'

const reducers = combineReducers({
    isLoading: isLoadingAppReducer,
    userData: userDataReducer,
    errors: errorReducer,
})

export default reducers