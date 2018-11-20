import {NetInfo} from 'react-native'
import {
    dontValidateAttendaceCertificate,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR,
    unknownError,
    validateAttendaceCertificate,
    WRONG_CREDENTIALS,
    wrongCredentialsError
} from './index'
import {VERIFY_ATTENDANCE_CERTIFICATE_URL} from '../util'

/**
 * Acción que verifica que el código QR escaneado se válido.
 *
 * @param sessionToken Token de la sesión (contenido del código QR).
 * @param bearerToken Token de seguridad del usuario.
 * @param username Nombre de usuario.
 * @returns {Function}
 */
export default function verifyQRCodeAction(sessionToken, bearerToken, username) {
    return (dispatch) => {
        verifyQRCode(sessionToken, bearerToken, username, dispatch)
    }
}

/**
 * Método que verifica la validez del código QR escaneado
 *
 * @param sessionToken Token de la sesión (contenido del código QR).
 * @param bearerToken Token de seguridad del usuario.
 * @param username Nombre de usuario.
 * @param dispatch Dispatcher.
 */
function verifyQRCode(sessionToken, bearerToken, username, dispatch) {
    let timestamp = new Date().getTime()

    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return makeVerifyAttendanceCertificateRequest(bearerToken, username, sessionToken, timestamp)
            } else {
                throw NO_CONNECTION
            }
        })
        .then((response) => {
            if (response._bodyText) {
                dispatch(validateAttendaceCertificate(username, sessionToken, timestamp))
            } else {
                dispatch(dontValidateAttendaceCertificate())
            }
        })
        .catch((error) => {
            switch (error) {
               case NO_CONNECTION:
                    dispatch(noConnectionError())
                    break
                case UNKNOWN_ERROR:
                default:
                    dispatch(unknownError())
                    break
            }
        })
}

/**
 * Método que realiza la petición para verificar la validez.
 *
 * @param sessionToken Token de la sesión (contenido del código QR).
 * @param bearerToken Token de seguridad del usuario.
 * @param username Nombre de usuario.
 * @param timestamp Momento en el que fue escanedo el código QR.
 * @returns {Promise<Response>}
 */
async function makeVerifyAttendanceCertificateRequest(bearerToken, username, sessionToken, timestamp) {
    try {
        return await fetch(VERIFY_ATTENDANCE_CERTIFICATE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify({
                userName: username,
                bearerToken: sessionToken,
                scanned: timestamp
            }),
        })
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}