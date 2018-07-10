import { AsyncStorage } from 'react-native'
import { loading, notLoading, authenticate, dontAuthenticate, changeToSplashScreen, changeToLoginScreen, changeToHomeScreen } from './'
import { API_URL } from '../util'

export function checkAuthenticationAction() {
    console.log('Entra a: checkAuthentication-action')
    return (dispatch) => {

        /* AsyncStorage.clear().then(() => {
            dispatch({ type: 'NOT_AUTHENTICATED' })
        }) */


        /**
         * Caso 1: hay token ✔
         * Caso 2: no hay token ✔
         */
        dispatch(loading())
        getAuthorizationToken().then((token) => {
            if (token !== null && token !== undefined) {
                getUsername().then((username) => {
                    if (username !== null && username !== undefined) {
                        makingFindUserDetailsRequest(username, token, dispatch).then(response => {
                            idStudent = response.id
                            dni = response.dni
                            firstNameAndLastName = response.firstName + ' ' + response.lastName
                            email = username + '@uniovi.es'
                            dispatch(authenticate(token, username, idStudent, dni, firstNameAndLastName, email))
                            setTimeout(() => {
                                dispatch(notLoading())
                                dispatch(changeToHomeScreen())
                            }, 1500)
                        }).catch(() => {
                            rollback(dispatch)
                        })
                    } else {
                        setTimeout(() => {
                            dispatch(notLoading())
                            dispatch(changeToLoginScreen())
                        }, 1500)
                    }
                }).catch(() => {
                    rollback(dispatch)
                })
            } else {
                setTimeout(() => {
                    dispatch(notLoading())
                    dispatch(changeToLoginScreen())
                }, 1500)
            }
        }).catch(() => {
            console.error('Error obteniendo el token de autorización en: checkAuthentication-action')
            rollback(dispatch)
        })
    }
}

/**
 * Obtenemos el token de autorización.
 */
async function getAuthorizationToken() {
    try {
        return await AsyncStorage.getItem('AUTHORIZATION')
    } catch (error) {
        console.error('Error obteniendo el token de autorización en: checkAuthentication-action')
    }
}

/**
 * Obtenemos el nombre de usuario.
 */
async function getUsername() {
    try {
        return await AsyncStorage.getItem('USERNAME')
    } catch (error) {
        console.error('Error obteniendo el nombre de usuario en: checkAuthentication-action')
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
        rollback(dispatch)
    }
}

function rollback(dispatch) {
    setAuthorizationToken(null).then(() => {
        setUsername(null).then(() => {
            dispatch(changeToSplashScreen())
            dispatch(error())
        })
    })
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
        console.log('Error guardando el token de autorización en: login-action')
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
        console.log('Error guardando el nombre de usuario en: login-action')
    }
}