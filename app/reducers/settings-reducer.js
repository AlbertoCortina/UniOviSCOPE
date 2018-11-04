import {
    LANDING_SCREEN_HOME_SCREEN,
    LANDING_SCREEN_CERTIFY_SCREEN,
    FACE_RECOGNITION_ON,
    FACE_RECOGNITION_OFF,
    HOME_SCREEN,
    CERTIFY_SCREEN, ON, OFF,
} from '../actions'

const initialState = {
    landingScreen: HOME_SCREEN,
    faceRecognition: OFF
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case LANDING_SCREEN_HOME_SCREEN:
            return {
                ...state,
                landingScreen: HOME_SCREEN
            }
        case LANDING_SCREEN_CERTIFY_SCREEN:
            return {
                ...state,
                landingScreen: CERTIFY_SCREEN
            }
        case FACE_RECOGNITION_ON:
            return {
                ...state,
                faceRecognition: ON
            }
        case FACE_RECOGNITION_OFF:
            return {
                ...state,
                faceRecognition: OFF
            }
        default:
            return state
    }
}