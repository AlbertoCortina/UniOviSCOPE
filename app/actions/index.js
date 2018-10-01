// Tipos de accciones
export const LOADING = 'LOADING'
export const NOT_LOADING = 'NOT_LOADING'
export const NO_CONNECTION = 'NO_CONNECTION'
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS'
export const DELETE_ERROR = 'DELETE_ERROR'
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const AUTHENTICATE = 'AUTHENTICATE'
export const DONT_AUTHENTICATE = 'DONT_AUTHENTICATE'
export const LANDING_SCREEN_HOME_SCREEN = 'LANDING_SCREEN_HOME_SCREEN'
export const LANDING_SCREEN_CERTIFY_SCREEN = 'LANDING_SCREEN_CERTIFY_SCREEN'
export const FACE_RECOGNITION_ON = 'FACE_RECOGNITION_ON'
export const FACE_RECOGNITION_OFF = 'FACE_RECOGNITION_OFF'

// Creadores de acciones
export function loading() {
    return {
        type: LOADING,
    }
}

export function notLoading() {
    return {
        type: NOT_LOADING,
    }
}

export function authenticate(token, id, dni, username, firstname, lastname, firstnameAndLastname, email, role) {
    return {
        type: AUTHENTICATE,
        token,
        id,
        dni,
        username,
        firstname,
        lastname,
        firstnameAndLastname,
        email,
        role,
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

export function deleteError(position) {
    return {
        type: DELETE_ERROR,
        position,
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