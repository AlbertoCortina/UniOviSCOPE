import { SPLASH_SCREEN, LOGIN_SCREEN, HOME_SCREEN } from '../actions'

const initialState = SPLASH_SCREEN

export default function currentScreenReducer(state = initialState, action) {
    console.log('Entra a: currentScreen-reducer')
    switch (action.type) {
        case SPLASH_SCREEN:
            return SPLASH_SCREEN
        case LOGIN_SCREEN:
            return LOGIN_SCREEN
        case HOME_SCREEN:
            return HOME_SCREEN
        default:
            return state
    }
}