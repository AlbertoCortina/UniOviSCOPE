import {NetInfo} from 'react-native'
import {
    certify,
    dontCertifyAttendance, dontValidateAttendaceCertificate,
    NO_CONNECTION,
    noConnectionError, resetAttendanceCertificate,
    UNKNOWN_ERROR,
    unknownError
} from './index'
import {CERTIFY_ATTENDANCE_URL} from '../util'
import RNFetchBlob from 'rn-fetch-blob'

/**
 * Acción para certificar la presencia en una sesión.
 *
 * @param image Fotografía facial.
 * @param certificate Certificado de asistencia.
 * @param bearerToken Token de seguridad.
 * @returns {Function}
 */
export default function certifyAttendanceAction(image, certificate, bearerToken) {
    return (dispatch) => {
        certifyAttendance(image, certificate, bearerToken, dispatch)
    }
}

/**
 * Método que realizar la certificación de presencia en una sesión.
 *
 * @param image Fotografía facial.
 * @param certificate Certificado de asistencia.
 * @param bearerToken Token de seguridad.
 * @param dispatch Dispatcher.
 */
function certifyAttendance(image, certificate, bearerToken, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return makeCertifyAttendanceRequest(image, bearerToken,
                    certificate.username, certificate.sessionToken,
                    certificate.timestamp)
            } else {
                throw NO_CONNECTION
            }
        })
        .then((response) => {
            if (response.data === 'true') {
                dispatch(certify())
            } else {
                dispatch(dontCertifyAttendance())
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
 * Método que realizar la petificón de certificación de presencia en una sesión.
 *
 * @param image Fotografía facial.
 * @param bearerToken Token de seguridad.
 * @param username Nombre de usuario.
 * @param sessionToken Token de la sesión.
 * @param scanned Hora en la que se escaneo el código QR.
 * @returns {Promise<void>}
 */
async function makeCertifyAttendanceRequest(image, bearerToken, username, sessionToken, scanned) {
    try {
        return await RNFetchBlob.fetch('POST', CERTIFY_ATTENDANCE_URL, {
                'Content-Type': 'multipart/form-data',
                Authorization: bearerToken
            },
            [
                {
                    name: 'certificate',
                    type: 'application/json',
                    data: JSON.stringify({
                        userName: username,
                        token: sessionToken,
                        scanned: scanned
                    })
                },
                {
                    name: 'image',
                    filename: 'image.png',
                    data: image
                }
            ])
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}