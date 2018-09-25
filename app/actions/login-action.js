import { NetInfo, } from 'react-native'
import { loading, unknownError, noConnectionError, authenticate, wrongCredentialsError, } from '../actions'
import { API_URL, LOG_IN_URL, FIND_USER_DETAILS_URL } from '../util'

export function loginAction(username, password) {    
    return (dispatch) => {
		/**
		 * Caso 2: Comprobar si tiene conexión a internet ✔
		 * Caso 3: Hace la peticion y todo va bien ✔
		 * Caso 4: Hace la peticion y no existe ningun usuario ✔
		 * Caso 5: Hace la peticion pero el servicio esta caido ✔
		 */
        dispatch(loading())
        setTimeout(function () {
            logIn(username, password, dispatch)
        }, 1000);
    }
}

/**
 * Método que realiza el log in en la aplicación
 */
function logIn(username, password, dispatch) {
    let token
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                makingLogInRequest(username, password)
                    .then((response) => {
                        token = response.headers.get('Authorization')
                        if (token !== null) {
                            return
                        } else {
                            throw 'WRONG_CREDENTIALS'
                        }
                    })
                    .then(() => {
                        return makingFindUserDetailsRequest(username, token)
                    })
                    .then((response) => {
                        id = response.id
                        dni = response.dni
                        firstname = response.firstName
                        lastname = response.lastName
                        firstnameAndLastname = response.firstName + ' ' + response.lastName
                        email = username + '@uniovi.es'
                        role = response.role
                        dispatch(authenticate(token, id, dni, username, firstname, lastname, firstnameAndLastname, email, role))
                    })
                    .catch((error) => {
                        switch (error) {
                            case 'WRONG_CREDENTIALS':
                                dispatch(wrongCredentialsError())
                                break
                            case 'UNKNOWN_ERROR':
                            default:
                                dispatch(unknownError())
                        }
                    })
            } else {
                dispatch(noConnectionError())
            }
        })
        .catch((error) => {
            switch (error) {
                case 'UNKNOWN_ERROR':
                default:
                    dispatch(unknownError())
            }
        })
}

/**
 * Método que realiza la petición del log in.
 */
async function makingLogInRequest(username, password) {
    try {
        return await fetch(API_URL + LOG_IN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: username,
                password: password
            }),
        })
    } catch (error) {
        throw 'UNKNOWN_ERROR'
    }
}

/**
 * Método que realiza la petición de buscar los datos del usuario.
 */
async function makingFindUserDetailsRequest(username, token) {
    try {
        let response = await fetch(API_URL + FIND_USER_DETAILS_URL + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        return await response.json()
    } catch (error) {
        throw 'UNKNOWN_ERROR'
    }
}