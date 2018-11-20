import {
    CERTIFY_SCREEN,
    FACE_RECOGNITION_OFF,
    FACE_RECOGNITION_ON,
    HOME_SCREEN,
    LANDING_SCREEN_CERTIFY_SCREEN,
    LANDING_SCREEN_HOME_SCREEN,
    OFF,
    ON,
} from '../actions'

/**
 * Estado inicial.
 *
 * @type {{landingScreen: string, faceRecognition: string}}
 */
const initialState = {
    landingScreen: HOME_SCREEN,
    faceRecognition: OFF
}

/**
 * Reducer para modificar el estado de los ajustes de la aplicación.
 *
 * @param state
 * @param action
 * @returns {{landingScreen: string, faceRecognition: string}}
 */
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