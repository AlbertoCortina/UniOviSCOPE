import {
    DONT_CERTIFY_ATTENDANCE,
    DONT_VALIDATE_ATTENDANCE_CERTIFICATE,
    VALIDATE_ATTENDANCE_CERTIFICATE
} from '../actions'

/**
 * Estado inicial.
 *
 * @type {{validated: boolean, username: null, sessionToken: null, timestamp: null}}
 */
const initialState = {
    validated: false,
    username: null,
    sessionToken: null,
    timestamp: null,
}

/**
 * Reducer para modificar el estado del certificado de asistencia.
 *
 * @param state
 * @param action
 * @returns {{validated: boolean, username: null, sessionToken: null, timestamp: null}}
 */
export default function attendanceCertificateReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_ATTENDANCE_CERTIFICATE:
            return {
                ...state,
                validated: true,
                username: action.username,
                sessionToken: action.sessionToken,
                timestamp: action.timestamp
            }
        case DONT_CERTIFY_ATTENDANCE:
        case DONT_VALIDATE_ATTENDANCE_CERTIFICATE:
            return {
                ...state,
                validated: false,
                username: null,
                sessionToken: null,
                timestamp: null,
            }
        default:
            return state
    }
}