import {
    loading,
    NO_CONNECTION,
    noConnectionError,
    UNKNOWN_ERROR,
    unknownError,
    theorySessions,
    notLoading,
    practiceSessions,
    seminarSessions,
    groupTutorshipSessions,
} from "../actions";
import {NetInfo} from "react-native";
import {
    API_URL,
    FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL,
    FIND_LAST_YEAR_SUBJECTS_URL,
    FIND_STUDENT_SESSION_ATTENDANCE_URL
} from "../util";

export default function getSessionsAction(token, idStudent, idSubject) {
    return (dispatch) => {
        dispatch(loading())

        setTimeout(function () {
            getSessions(token, idStudent, idSubject, dispatch)
        }, 1000);
    }
}

function getSessions(token, idStudent, idSubject, dispatch) {
    NetInfo.isConnected.fetch()
        .then((isConnected) => {
            if (isConnected) {
                return
            } else {
                throw NO_CONNECTION
            }
        })
        .then(() => {
            return makeFindLastYearSubjectTheorySessionsRequest(token, idStudent, idSubject)
        })
        .then((sessionsResponse) => {
            return transformResponse(sessionsResponse)
        })
        .then(() => {
            return makeFindLastYearSubjectPracticeSessionsRequest(token, idStudent, idSubject)
        })
        .then((sessionsResponse) => {
            return transformResponse(sessionsResponse)
        })
        .then(() => {
            return makeFindLastYearSubjectSeminarSessionsRequest(token, idStudent, idSubject)
        })
        .then((sessionsResponse) => {
            return transformResponse(sessionsResponse)
        })
        .then(() => {
            return makeFindLastYearSubjectGroupTutorshipSessionsRequest(token, idStudent, idSubject)
        })
        .then((sessionsResponse) => {
            return transformResponse(sessionsResponse)
        })
        .then((sessionsResponse) => {
            dispatch(theorySessions(sessionsResponse))
            dispatch(practiceSessions(sessionsResponse))
            dispatch(seminarSessions(sessionsResponse))
            dispatch(groupTutorshipSessions(sessionsResponse))
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
        .finally(() => {
            dispatch(notLoading())
        })
}

async function makeFindLastYearSubjectTheorySessionsRequest(token, idStudent, idSubject) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, 'THEORY'), {
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

async function makeFindLastYearSubjectPracticeSessionsRequest(token, idStudent, idSubject) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, 'PRACTICE'), {
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

async function makeFindLastYearSubjectSeminarSessionsRequest(token, idStudent, idSubject) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, 'SEMINAR'), {
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

async function makeFindLastYearSubjectGroupTutorshipSessionsRequest(token, idStudent, idSubject) {
    try {
        let response = await fetch(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, 'GROUP_TUTORSHIP'), {
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

async function makeFindStudentSessionAttendanceRequest(token, idStudent, idSession) {
    try {
        let response = await fetch(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSession), {
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
    let sessions = []
    for (let i = 0; i < response.length; i++) {
        sessions[i] = {
            id: response[i].id,
            start: response[i].start,
            end: response[i].end,
            location: response[i].location,
            groupId: response[i].group.id,
            groupCode: response[i].group.id,
            subjectId: response[i].group.subject.subject.id,
            assistence: null,
        }
    }
    return sessions
}