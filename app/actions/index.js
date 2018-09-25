// Tipos de accciones
export const LOADING = 'LOADING'
export const NOT_LOADING = 'NOT_LOADING'
export const NO_CONNECTION = 'NO_CONNECTION'
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS'
export const DELETE_ERROR = 'DELETE_ERROR'
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'
export const AUTHENTICATE = 'AUTHENTICATE'
export const DONT_AUTHENTICATE = 'DONT_AUTHENTICATE'

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