// Tipos de accciones
export const LOADING = 'LOADING'
export const NOT_LOADING = 'NOT_LOADING'
export const NO_CONNECTION = 'NO_CONNECTION'
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS'
export const NOTIFICATION = 'NOTIFICATION'
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const AUTHENTICATE = 'AUTHENTICATE'
export const DONT_AUTHENTICATE = 'DONT_AUTHENTICATE'
export const LANDING_SCREEN_HOME_SCREEN = 'LANDING_SCREEN_HOME_SCREEN'
export const HOME_SCREEN = 'Home'
export const LANDING_SCREEN_CERTIFY_SCREEN = 'LANDING_SCREEN_CERTIFY_SCREEN'
export const CERTIFY_SCREEN = 'CertifyAttendance'
export const FACE_RECOGNITION_ON = 'FACE_RECOGNITION_ON'
export const ON = 'ON'
export const FACE_RECOGNITION_OFF = 'FACE_RECOGNITION_OFF'
export const OFF = 'OFF'
export const SUBJECTS = 'SUBJECTS'
export const THEORY_SESSIONS = 'THEORY_SESSIONS'
export const PRACTICE_SESSIONS = 'PRACTICE_SESSIONS'
export const SEMINAR_SESSIONS = 'SEMINAR_SESSIONS'
export const GROUP_TUTORSHIP_SESSIONS = 'GROUP_TUTORSHIP_SESSIONS'
export const VALIDATE_ATTENDANCE_CERTIFICATE = 'VALIDATE_ATTENDANCE_CERTIFICATE'
export const DONT_VALIDATE_ATTENDANCE_CERTIFICATE = 'DONT_VALIDATE_ATTENDANCE_CERTIFICATE'
export const CERTIFY_ATTENDANCE = 'CERTIFY_ATTENDANCE'
export const DONT_CERTIFY_ATTENDANCE = 'DONT_CERTIFY_ATTENDANCE'

// Creadores de acciones
export function loading() {
    return {
        type: LOADING
    }
}

export function notLoading() {
    return {
        type: NOT_LOADING,
    }
}

export function authenticate(bearerToken, id, dni, username, firstname, lastname, firstnameAndLastname, email, role) {
    return {
        type: AUTHENTICATE,
        bearerToken: bearerToken,
        id: id,
        dni: dni,
        username: username,
        firstname: firstname,
        lastname: lastname,
        firstnameAndLastname: firstnameAndLastname,
        email: email,
        role: role,
    }
}

export function dontAuthenticate() {
    return {
        type: DONT_AUTHENTICATE,
    }
}

export function noConnectionError() {
    return {
        type: NO_CONNECTION,
    }
}

export function wrongCredentialsError() {
    return {
        type: WRONG_CREDENTIALS
    }
}

export function unknownError() {
    return {
        type: UNKNOWN_ERROR
    }
}

export function deleteNotification(position) {
    return {
        type: NOTIFICATION,
        position: position,
    }
}

export function landingScreenHomeScreen() {
    return {
        type: LANDING_SCREEN_HOME_SCREEN
    }
}

export function landingScreenCertifyScreen() {
    return {
        type: LANDING_SCREEN_CERTIFY_SCREEN
    }
}

export function faceRecognitionOn() {
    return {
        type: FACE_RECOGNITION_ON
    }
}

export function faceRecognitionOff() {
    return {
        type: FACE_RECOGNITION_OFF
    }
}

export function subjects(subjects) {
    return {
        type: SUBJECTS,
        subjects
    }
}

export function theorySessions(sessionsValues) {
    return {
        type: THEORY_SESSIONS,
        sessionsValues,
    }
}

export function practiceSessions(sessionsValues) {
    return {
        type: PRACTICE_SESSIONS,
        sessionsValues,
    }
}

export function seminarSessions(sessionsValues) {
    return {
        type: SEMINAR_SESSIONS,
        sessionsValues:sessionsValues,
    }
}

export function groupTutorshipSessions(sessionsValues) {
    return {
        type: GROUP_TUTORSHIP_SESSIONS,
        sessionsValues,
    }
}

export function validateAttendaceCertificate(username, sessionToken, timestamp) {
    return {
        type: VALIDATE_ATTENDANCE_CERTIFICATE,
        username: username,
        sessionToken: sessionToken,
        timestamp: timestamp
    }
}

export function dontValidateAttendaceCertificate() {
    return {
        type: DONT_VALIDATE_ATTENDANCE_CERTIFICATE
    }
}

export function certify() {
    return {
        type: CERTIFY_ATTENDANCE
    }
}

export function dontCertifyAttendance() {
    return {
        type: DONT_CERTIFY_ATTENDANCE
    }
}