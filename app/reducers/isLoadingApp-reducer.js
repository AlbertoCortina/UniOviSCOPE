import {
    AUTHENTICATE,
    DONT_AUTHENTICATE,
    GROUP_TUTORSHIP_SESSIONS,
    LOADING,
    NO_CONNECTION,
    NOT_LOADING,
    PRACTICE_SESSIONS,
    SEMINAR_SESSIONS,
    THEORY_SESSIONS,
    UNKNOWN_ERROR,
    WRONG_CREDENTIALS,
} from '../actions'

/**
 * Estado inicial.
 *
 * @type {boolean}
 */
const initialState = false

/**
 * Reducer para modificar el estado de la carga de la aplicación.
 *
 * @param state
 * @param action
 * @returns {boolean}
 */
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
            return false
        default:
            return state
    }
}