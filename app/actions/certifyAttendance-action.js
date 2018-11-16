import {NetInfo} from "react-native";
import {
    certify,
    dontCertifyAttendance,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR,
    unknownError,
    WRONG_CREDENTIALS,
    wrongCredentialsError
} from "./index";
import {CERTIFY_ATTENDANCE_URL} from "../util"
import RNFetchBlob from 'rn-fetch-blob'


export default function certifyAttendanceAction(certificate, bearerToken) {
    return (dispatch) => {
        // dispatch(loading())

        certifyAttendance(certificate, bearerToken, dispatch)
    }
}

function certifyAttendance(certificate, bearerToken, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return
            } else {
                throw NO_CONNECTION
            }
        })
        .then(() => {
            return makeCertifyAttendanceRequest(bearerToken, certificate.username, certificate.sessionToken, certificate.timestamp)
        })
        .then((response) => {
            console.log(response.data)
            if (response.data === 'true') {
                dispatch(certify())
            } else {
                dispatch(dontCertifyAttendance())
            }
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
                    break
            }
        })
}

async function makeCertifyAttendanceRequest(bearerToken, username, sessionToken, scanned) {
    try {

        return await RNFetchBlob.fetch('POST', CERTIFY_ATTENDANCE_URL, {
                'Content-Type': 'multipart/form-data',
                Authorization: bearerToken
            },
            [
                {
                    name: 'certificate', type: 'application/json', data: JSON.stringify({
                        userName: username,
                        bearerToken: sessionToken,
                        scanned: scanned
                    })
                }
            ])
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}