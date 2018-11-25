import {
    NO_CONNECTION,
    noConnectionError,
    subjects,
    UNKNOWN_ERROR,
    unknownError
} from '../actions'
import {NetInfo} from 'react-native'
import {FIND_LAST_YEAR_SUBJECTS_URL} from '../util'
import I18n from '../resources/i18n'

/**
 * Acción que realiza la búsqueda de asignaturas para un estudiante.
 *
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @returns {Function}
 */
export default function getSubjectsAction(bearerToken, idStudent) {
    return (dispatch) => {
        findSubjects(bearerToken, idStudent, dispatch)
    }
}

/**
 * Método que realiza la busqueda de asignaturas.
 *
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @param dispatch Dispatcher.
 */
function findSubjects(bearerToken, idStudent, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return makeFindLastYearSubjectsRequest(bearerToken, idStudent)
            } else {
                throw NO_CONNECTION
            }
        })
        .then((response) => {
            return transformResponse(response)
        })
        .then((response) => {
            dispatch(subjects(response))
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
 * Método que realiza la petición de buscar las asignaturas.
 *
 * @param bearerToken Token de seguridad.
 * @param idStudent Identificador del estudiante.
 * @returns {Promise<any>}
 */
async function makeFindLastYearSubjectsRequest(bearerToken, idStudent) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_URL, idStudent), {
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
 * Transforma la respuesta del servidor para adaptarlo al estado de la
 * aplicacion.
 *
 * @param response Respuesta del servidor.
 * @returns {Array}
 */
function transformResponse(response) {
    let subjects = []
    for (let i = 0; i < response.length; i++) {
        subjects[i] = {
            id: response[i].id,
            code: response[i].code,
            denomination: response[i].denomination,
            course: transformCourseToString(response[i].course),
            temporality: response[i].temporality,
        }
    }
    return subjects
}

/**
 * Transforma el número de curso a letra.
 *
 * @param course Curso.
 * @returns {string}
 */
function transformCourseToString(course) {
    switch (course) {
        case 1:
            return I18n.t('primero')
        case 2:
            return I18n.t('segundo')
        case 3:
            return I18n.t('tercero')
        case 4:
            return I18n.t('cuarto')
        default:
            return ''
    }
}

