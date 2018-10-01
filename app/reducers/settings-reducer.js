import { LANDING_SCREEN_HOME_SCREEN, LANDING_SCREEN_CERTIFY_SCREEN, FACE_RECOGNITION_ON, FACE_RECOGNITION_OFF } from '../actions'

const initialState = {
    landingScreen: 'HOME',
    faceRecognition: 'ON'
}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case LANDING_SCREEN_HOME_SCREEN:
            return {
                ...state,
                landingScreen: 'HOME'
            }
        case LANDING_SCREEN_CERTIFY_SCREEN:
            return {
                ...state,
                landingScreen: 'CERTIFY'
            }
        case FACE_RECOGNITION_ON:
            return {
                ...state,
                faceRecognition: 'ON'
            }
        case FACE_RECOGNITION_OFF:
            return {
                ...state,
                faceRecognition: 'OFF'
            }
        default:
            return state
    }
}