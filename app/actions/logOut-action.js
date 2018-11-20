import {dontAuthenticate, loading} from '../actions'

/**
 * Acción que realiza el cierre de sesión de la aplicación.
 *
 * @returns {Function}
 */
export default function logOutAction() {
    return (dispatch) => {
        dispatch(loading())

        setTimeout(function () {
            dispatch(dontAuthenticate())
        }, 1000)

    }
}