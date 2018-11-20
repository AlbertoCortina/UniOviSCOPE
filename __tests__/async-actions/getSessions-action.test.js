import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../../app/actions'
import getSessionsAction from '../../app/actions/getSessions-action'
import configureMockStore from 'redux-mock-store'
import {
    FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL,
    FIND_STUDENT_SESSION_ATTENDANCE_URL
} from '../../app/util'

const mockStore = configureMockStore([thunk])

describe('GetSessions Actions', () => {
    let store
    const bearerToken = 'bearerToken'
    const idStudent = 1
    const idSubject = 1
    let sessionType

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        store.clearActions()
        jest.resetModules()
    })

    test('Should dispatch noConnection', (done) => {

        const expectedActions = [
            {type: actions.NO_CONNECTION}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(false);
                        })
                    }
                }
            }
        })

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch (theory) sessions', (done) => {
        sessionType = 'THEORY'

        const expectedActions = [
            {
                type: actions.THEORY_SESSIONS,
                sessionsValues:
                    [
                        {
                            id: 1,
                            start: 12345,
                            end: 12345,
                            location: 'location1',
                            groupCode: 'code1',
                            assistence: true
                        }
                    ]
            }
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        })

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),
                [
                    {
                        id: 1,
                        start: 12345,
                        end: 12345,
                        location: 'location1',
                        group: {
                            code: 'code1'
                        }
                    }
                ]
            )
            .mock(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, 1, 1), 200)

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch (practice) sessions', (done) => {
        sessionType = 'PRACTICE'

        const expectedActions = [
            {
                type: actions.PRACTICE_SESSIONS,
                sessionsValues:
                    [
                        {
                            id: 1,
                            start: 12345,
                            end: 12345,
                            location: 'location1',
                            groupCode: 'code1',
                            assistence: true
                        }
                    ]
            }
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        })

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),

                [
                    {
                        id: 1,
                        start: 12345,
                        end: 12345,
                        location: 'location1',
                        group: {
                            code: 'code1'
                        }
                    }
                ]
            )
            .mock(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSubject), 200)

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch (seminar) sessions', (done) => {
        sessionType = 'SEMINAR'

        const expectedActions = [
            {
                type: actions.SEMINAR_SESSIONS,
                sessionsValues:
                    [
                        {
                            id: 1,
                            start: 12345,
                            end: 12345,
                            location: 'location1',
                            groupCode: 'code1',
                            assistence: true
                        }
                    ]
            }
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        })

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),

                [
                    {
                        id: 1,
                        start: 12345,
                        end: 12345,
                        location: 'location1',
                        group: {
                            code: 'code1'
                        }
                    }
                ]
            )
            .mock(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSubject), 200)

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch (group_tutorship) sessions', (done) => {
        sessionType = 'GROUP_TUTORSHIP'

        const expectedActions = [
            {
                type: actions.GROUP_TUTORSHIP_SESSIONS,
                sessionsValues:
                    [
                        {
                            id: 1,
                            start: 12345,
                            end: 12345,
                            location: 'location1',
                            groupCode: 'code1',
                            assistence: true
                        }
                    ]
            }
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),

                [
                    {
                        id: 1,
                        start: 12345,
                        end: 12345,
                        location: 'location1',
                        group: {
                            code: 'code1'
                        }
                    }
                ]
            )
            .mock(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSubject), 200)

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch unknownError (fails findLastYearSubjectSessionsRequest request)', (done) => {
        sessionType = 'THEORY'

        const expectedActions = [
            {type: actions.UNKNOWN_ERROR}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),
                {
                    throws: 'Server not found'
                }
            )


        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch unknownError (fails findStudentSessionAttendance request)', (done) => {
        sessionType = 'THEORY'

        const expectedActions = [
            {type: actions.UNKNOWN_ERROR}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, idStudent, idSubject, sessionType),

                [
                    {
                        id: 1,
                        start: 12345,
                        end: 12345,
                        location: 'location1',
                        group: {
                            code: 'code1'
                        }
                    },
                    {
                        id: 2,
                        start: 12345,
                        end: 12345,
                        location: 'location2',
                        group: {
                            code: 'code2'
                        }
                    }
                ]
            )
            .mock(String.format(FIND_STUDENT_SESSION_ATTENDANCE_URL, idStudent, idSubject), {throws: 'Server not found'})

        store.dispatch(getSessionsAction(bearerToken, idStudent, idSubject, sessionType))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

})