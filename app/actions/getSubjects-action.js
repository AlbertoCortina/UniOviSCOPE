import {
    subjects,
    loading,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR, unknownError,
    notLoading
} from '../actions'
import {NetInfo} from "react-native";
import {API_URL, FIND_LAST_YEAR_SUBJECTS_URL} from "../util";

export default function getSubjectsAction(token, idStudent) {
    return (dispatch) => {
        dispatch(loading('SUBJECTS'))

        setTimeout(function () {
            findSubjects(token, idStudent, dispatch)
        }, 1000);
    }
}

function findSubjects(token, idStudent, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return
            } else {
                throw NO_CONNECTION
            }
        })
        .then(() => {
            return makeFindLastYearSubjectsRequest(token, idStudent)
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
                case UNKNOWN_ERROR:
                default:
                    dispatch(unknownError())
            }
        })
}

async function makeFindLastYearSubjectsRequest(token, idStudent) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_URL, idStudent), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        return await response.json()
    } catch (error) {
        throw UNKNOWN_ERROR
    }
}

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

function transformCourseToString(course) {
    switch (course) {
        case 1:
            return 'Primero'
        case 2:
            return 'Segundo'
        case 3:
            return 'Tercero'
        case 4:
            return 'Cuarto'
        default:
            return ''
    }
}

