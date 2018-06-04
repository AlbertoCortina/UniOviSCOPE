import { NetInfo, AsyncStorage } from 'react-native'

function makingRequest() {
    return {
        type: 'IN_PROGRESS'
    }
}

function emptyFields() {
    return {
        type: 'EMPTY'
    }
}

function noInternetConnection() {
    return {
        type: 'OFFLINE'
    }
}

function authorized() {
    return {
        type: 'LOGGED'
    }
}

function notAuthorized() {
    return {
        type: 'NOT_LOGGED'
    }
}

function error() {
    return {
        type: 'ERROR'
    }
}

export function loginAction(username, password) {
    return (dispatch) => {
        /**
         * Caso 1: Comprobar si el usuario o la password estan vacias
         * Caso 2: Comprobar si tiene conexión a internet
         * Caso 3: Hace la peticion y todo va bien
         * Caso 4: Hace la peticion y no existe ningun usuario
         * Caso 5: Hacer la peticion pero el servicio esta caido
         */
        dispatch(makingRequest())

        if (username.length == 0 || password.length == 0) {
            dispatch(emptyFields())
        } else {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    fetch('http://192.168.43.88:8080/uniovi-scope/common/logIn', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userName: username,
                            password: password,
                        })
                    }).then((response) => {
                        if (response.headers.get('Authorization') !== null) {
                            AsyncStorage.removeItem('AUTHORIZATION', () => {
                                AsyncStorage.setItem('AUTHORIZATION', response.headers.get('Authorization'), () => {
                                    dispatch(authorized())
                                })
                            })
                        } else {
                            dispatch(notAuthorized())
                        }
                    }).catch((e) => {
                        console.log(e)
                        dispatch(error())
                    })
                } else {
                    dispatch(noInternetConnection())
                }
            })
        }
    }
}