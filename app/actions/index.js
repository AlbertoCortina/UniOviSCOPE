// Tipos de accciones
export const LOADING = 'LOADING'
export const NOT_LOADING = 'NOT_LOADING'
export const NO_CONNECTION = 'NO_CONNECTION'
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS'
export const DELETE_ERROR = 'DELETE_ERROR'
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const ERROR = 'ERROR'
export const AUTHENTICATE = 'AUTHENTICATE'
export const DONT_AUTHENTICATE = 'DONT_AUTHENTICATE'
export const SPLASH_SCREEN = 'SPLASH_SCREEN'
export const LOGIN_SCREEN = 'LOGIN_SCREEN'
export const HOME_SCREEN = 'HOME_SCREEN'

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

export function offline() {
    return {
        type: OFFLINE,
    }
}

export function error() {
    return {
        type: ERROR,
    }
}

export function authenticate(token, username, idStudent, dni, firstNameAndLastName, email) {
    return {
        type: AUTHENTICATE,
        token,
        username,
        idStudent,
        dni,
        firstNameAndLastName,
        email,
    }
}

export function dontAuthenticate() {
    return {
        type: DONT_AUTHENTICATE,
    }
}

export function changeToSplashScreen() {
    return {
        type: SPLASH_SCREEN,
    }
}

export function changeToLoginScreen() {
    return {
        type: LOGIN_SCREEN,
    }
}

export function changeToHomeScreen() {
    return {
        type: HOME_SCREEN,
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