import { combineReducers } from 'redux';
import { loginReducer } from './login-reducers'
import { checkAuthenticationReducer } from './splash-reducers';

export default combineReducers({
    loginReducer,
    checkAuthenticationReducer
});