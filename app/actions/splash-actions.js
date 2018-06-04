import { AsyncStorage } from 'react-native'

function permit(token) {
    return {
        type: 'PERMIT',
        value: token
    }
}

function deny() {
    return {
        type: 'DENY'
    }
}

export function checkAuthenticationAction() {
    return (dispatch) => {
        /**
         * -> Comprobar si hay un token:
         *   -> Si lo hay: ir a la pantalla principal de la aplicación  
         *   -> En otro caso: ir a la pantalla de login
         */
        getAuthorizationToken().then((token) => {
            if (token !== null) {
                dispatch(permit(token))
            } else {
                dispatch(deny())
            }
        }).catch((error) => {
            console.error('Error obteniendo el token de autorización')
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
        console.error('Error obteniendo el token de autorización')
    }
}