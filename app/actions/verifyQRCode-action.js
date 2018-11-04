import {NetInfo} from "react-native";
import {
    dontValidateAttendaceCertificate,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR,
    unknownError,
    validateAttendaceCertificate,
    WRONG_CREDENTIALS,
    wrongCredentialsError
} from "./index";
import {VERIFY_ATTENDANCE_CERTIFICATE_URL} from "../util";

export default function verifyQRCodeAction(sessionToken, bearerToken, username) {
    return (dispatch) => {
        // dispatch(loading())

        verifyQRCode(sessionToken, bearerToken, username, dispatch)
    }
}

function verifyQRCode(sessionToken, bearerToken, username, dispatch) {
    let timestamp = new Date().getTime()

    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return
            } else {
                throw NO_CONNECTION
            }
        })
        .then(() => {
            return makeVerifyAttendanceCertificateRequest(bearerToken, username, sessionToken, timestamp)
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
                token: sessionToken,
                scanned: timestamp
            }),
        })
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}