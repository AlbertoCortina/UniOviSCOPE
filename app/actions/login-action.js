import { NetInfo, AsyncStorage } from 'react-native'
import { loading, notLoading, unknownError, noConnectionError, authenticate, dontAuthenticate, wrongCredentialsError } from '../actions'
import { API_URL } from '../util'

export function loginAction(username, password) {
    console.log('Entra a: login-action');
    return (dispatch) => {
		/**
		 * Caso 2: Comprobar si tiene conexión a internet ✔
		 * Caso 3: Hace la peticion y todo va bien ✔
		 * Caso 4: Hace la peticion y no existe ningun usuario ✔
		 * Caso 5: Hace la peticion pero el servicio esta caido ✔
		 */
        let token
        dispatch(loading())
        NetInfo.isConnected.fetch()
            .then((isConnected) => {
                if (isConnected) {
                    makingLogInRequest(username, password, dispatch)
                        .then((response) => {
                            token = response.headers.get('Authorization')
                            if (token !== null) {
                                return setAuthorizationToken(token)
                            } else {
                                throw 'WRONG_CREDENTIALS'
                            }
                        })
                        .then(() => {
                            return setUsername(username)
                        })
                        .then(() => {
                            return makingFindUserDetailsRequest(username, token, dispatch)
                        })
                        .then((response) => {
                            idStudent = response.id
                            dni = response.dni
                            firstNameAndLastName = response.firstName + ' ' + response.lastName
                            email = username + '@uniovi.es'
                            dispatch(authenticate(token, username, idStudent, dni, firstNameAndLastName, email))
                        })
                        .catch((error) => {
                            if (error === 'WRONG_CREDENTIALS') {
                                dispatch(wrongCredentialsError())
                            } else {
                                rollback(dispatch)
                            }
                        })                        
                } else {
                    dispatch(noConnectionError())
                }
            })
            .catch((error) => {
                rollback(dispatch)
            })
    }
}

/**
 * Método que realiza la petición del log in.
 */
async function makingLogInRequest(username, password, dispatch) {
    try {
        return await fetch(API_URL + '/common/logIn', {
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
        return null
        console.log('Error haciendo petición de login en login-action')
    }
}

/**
 * Método que guarda el token de autorización.
 */
async function setAuthorizationToken(token) {
    try {
        return await AsyncStorage.removeItem('AUTHORIZATION', () => {
            AsyncStorage.setItem('AUTHORIZATION', token)
        })
    } catch (error) {
        return null
        console.log('Error guardando el token de autorización en: login-action')
    }
}

/**
 * Método que realiza la petición de buscar los datos del usuario.
 */
async function makingFindUserDetailsRequest(username, token, dispatch) {
    try {
        let response = await fetch(API_URL + '/common/findUserDetails?userName=' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        return await response.json()
    } catch (error) {
        return null
    }
}

/**
 * Método que guarda el nombre de usuario.
 */
async function setUsername(username) {
    try {
        return await AsyncStorage.removeItem('USERNAME', () => {
            AsyncStorage.setItem('USERNAME', username)
        })
    } catch (error) {
        return null
        console.log('Error guardando el nombre de usuario en: login-action')
    }
}

function rollback(dispatch) {
    setAuthorizationToken(null).then(() => {
        setUsername(null).then(() => {
            dispatch(unknownError())
        })
    })
}