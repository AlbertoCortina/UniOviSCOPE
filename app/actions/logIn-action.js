import {NetInfo,} from 'react-native'
import {
    authenticate,
    loading,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR,
    unknownError,
    WRONG_CREDENTIALS,
    wrongCredentialsError
} from '../actions'
import {FIND_USER_DETAILS_URL, LOG_IN_URL} from '../util'

/**
 * Acción que realizar el inicio de sesión en la aplicación.
 *
 * @param username Nombre de usuario.
 * @param password Contraseña.
 * @returns {Function}
 */
export default function logInAction(username, password) {
    return (dispatch) => {

        dispatch(loading())

        setTimeout(() => {
            logIn(username, password, dispatch)
        }, 1000)

    }
}

/**
 * Método para realizar el inicio de sesión en la aplicación.
 *
 * @param username Nombre de usuario.
 * @param password Contraseña.
 * @param dispatch Dispatcher.
 */
function logIn(username, password, dispatch) {
    let bearerToken

    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return makeLogInRequest(username, password)
            } else {
                throw NO_CONNECTION
            }
        })
        .then((response) => {
            bearerToken = response.headers.get('Authorization')
            if (bearerToken !== null) {
                return makeFindUserDetailsRequest(username, bearerToken)
            } else {
                throw WRONG_CREDENTIALS
            }
        })
        .then((response) => {
            let id = response.id
            let dni = response.dni
            let firstname = response.firstName
            let lastname = response.lastName
            let firstnameAndLastname = response.firstName + ' ' + response.lastName
            let email = username + '@uniovi.es'
            let role = response.role
            dispatch(authenticate(bearerToken, id, dni, username, firstname, lastname,
                firstnameAndLastname, email, role))
        })
        .catch((error) => {
            switch (error) {
                case WRONG_CREDENTIALS:
                    dispatch(wrongCredentialsError())
                    break
                case NO_CONNECTION:
                    dispatch(noConnectionError())
                    break
                case UNKNOWN_ERROR:
                default:
                    dispatch(unknownError())
            }
        })

}

/**
 * Método que realiza la petición del log in.
 *
 * @param username Nombre de usuario.
 * @param password Contraseña.
 * @returns {Promise<Response>}
 */
async function makeLogInRequest(username, password) {
    try {
        return await fetch(LOG_IN_URL, {
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
        throw UNKNOWN_ERROR
    }
}

/**
 * Método que realiza la petición de buscar los datos del usuario.
 *
 * @param username Nombre de usuario.
 * @param bearerToken Token de seguridad.
 * @returns {Promise<any>}
 */
async function makeFindUserDetailsRequest(username, bearerToken) {
    try {
        let response = await fetch(String.format(FIND_USER_DETAILS_URL, username), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
        })
        return await response.json()
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}