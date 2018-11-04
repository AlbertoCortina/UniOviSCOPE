import {
    LOADING,
    NOT_LOADING,
    AUTHENTICATE,
    DONT_AUTHENTICATE,
    NO_CONNECTION,
    WRONG_CREDENTIALS,
    UNKNOWN_ERROR,
    SUBJECTS,
    LANDING_SCREEN_CERTIFY_SCREEN,
    LANDING_SCREEN_HOME_SCREEN,
    FACE_RECOGNITION_OFF,
    FACE_RECOGNITION_ON,
    DELETE_ERROR,
} from '../actions'

const initialState = false

export default function isLoadingAppReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return true
        case NOT_LOADING:
        case AUTHENTICATE:
        case DONT_AUTHENTICATE:
        case NO_CONNECTION:
        case WRONG_CREDENTIALS:
        case UNKNOWN_ERROR:
        case FACE_RECOGNITION_OFF:
        case FACE_RECOGNITION_ON:
        case DELETE_ERROR:
        case SUBJECTS:
            return false
        default:
            return state
    }
}