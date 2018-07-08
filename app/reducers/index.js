import { combineReducers } from 'redux'
import isLoadingAppReducer from './isLoadingApp-reducer'
import currentScreenReducer from './currentScreen-reducer'
import loginDataReducer from './loginData-reducer'
import errorReducer from './error-reducer'

const reducers = combineReducers({
    isLoadingApp: isLoadingAppReducer, 
    currentScreen: currentScreenReducer,
    loginData: loginDataReducer,
    errors:errorReducer,
}) 

export default reducers