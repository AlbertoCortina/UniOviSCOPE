import {
    GROUP_TUTORSHIP_SESSIONS,
    groupTutorshipSessions,
    NO_CONNECTION,
    noConnectionError,
    PRACTICE_SESSIONS,
    practiceSessions,
    SEMINAR_SESSIONS,
    seminarSessions,
    THEORY_SESSIONS,
    theorySessions,
    UNKNOWN_ERROR,
    unknownError,
} from "../actions";
import {NetInfo} from "react-native";
import {
    FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL,
    FIND_STUDENT_SESSION_ATTENDANCE_URL
} from '../util'
import {sessions} from "./index";

export default function getSessionsAction(bearerToken, idStudent, idSubject, sessionType) {
    return (dispatch) => {
        getSessions(bearerToken, idStudent, idSubject, sessionType, dispatch)
    }
}

function getSessions(bearerToken, idStudent, idSubject, sessionType, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return makeFindLastYearSubjectSessionsRequest(bearerToken, idStudent, idSubject, sessionType)
            } else {
                throw NO_CONNECTION
            }
        })
        .then((sessionsResponse) => {
            return transformResponse(sessionsResponse, bearerToken, idStudent)
        })
        .then((sessionsResponse) => {
            switch (sessionType) {
                case 'THEORY':
                    dispatch(sessions(THEORY_SESSIONS, sessionsResponse))
                    break
                case 'PRACTICE':
                    dispatch(sessions(PRACTICE_SESSIONS, sessionsResponse))
                    break
                case 'SEMINAR':
                    dispatch(sessions(SEMINAR_SESSIONS, sessionsResponse))
                    break
                case 'GROUP_TUTORSHIP':
                    dispatch(sessions(GROUP_TUTORSHIP_SESSIONS, sessionsResponse))
                    break
                default:
                    break
            }
        })
        .catch((error) => {
            switch (error) {
                case NO_CONNECTION:
                    dispatch(noConnectionError())
                case UNKNOWN_ERROR:
                default:
                    dispatch(unknownError())
                    break
            }
        })
}

/**
 * Método que realiza la petición para buscar las sesiones de una
 * determinada asignatura y un tipo de sesión.
 *
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @param idSubject Identificador de la asignatura.
 * @param sessionType Tipo de sesión.
 * @returns {Promise<any>}
 */
async function makeFindLastYearSubjectSessionsRequest(bearerToken, idStudent, idSubject, sessionType) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType), {
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

/**
 * Método que realiza la petición para buscar si se asistió o no a una determinada
 * sesión.
 *
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @param idSubject Identificador de la asignatura.
 * @returns {Promise<boolean>}
 */
async function makeFindStudentSessionAttendanceRequest(bearerToken, idStudent, idSession) {
    try {
        let response = await fetch(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSession), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
        })
        return response.bodyText != '';
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}

/**
 * Método que transforma la respuesta del servidor para que sea más manejable.
 *
 * @param response
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @returns {Promise<Array>}
 */
async function transformResponse(response, bearerToken, idStudent) {
    let sessions = []
    for (let i = 0; i < response.length; i++) {
        sessions[i] = {
            id: response[i].id,
            start: new Date(response[i].start).toLocaleDateString(),
            end: response[i].end,
            location: response[i].location,
            groupCode: response[i].group.code,
            assistence: await makeFindStudentSessionAttendanceRequest(bearerToken, idStudent, response[i].id),
        }
    }

    return sessions
}