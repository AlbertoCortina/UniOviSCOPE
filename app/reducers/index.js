import { combineReducers } from 'redux'
import isLoadingAppReducer from './isLoadingApp-reducer'
import loginDataReducer from './loginData-reducer'
import errorReducer from './error-reducer'

const reducers = combineReducers({
    isLoadingApp: isLoadingAppReducer,
    loginData: loginDataReducer,
    errors: errorReducer,
})

export default reducers