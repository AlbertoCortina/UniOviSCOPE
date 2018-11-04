import {DONT_VALIDATE_ATTENDANCE_CERTIFICATE, VALIDATE_ATTENDANCE_CERTIFICATE} from "../actions";

const initialState = {
    validated: false,
    username: null,
    sessionToken: null,
    timestamp: null,
}

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