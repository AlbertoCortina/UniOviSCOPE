import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../../app/actions'
import getSessionsAction from '../../app/actions/getSessions-action'
import configureMockStore from 'redux-mock-store'
import {FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL} from "../../app/util";

const mockStore = configureMockStore([thunk])

describe('GetSessions Actions', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        store.clearActions()
        jest.resetModules()
    })

    test('Should dispatch noConnection', () => {

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
        });

        store.dispatch(getSessionsAction('bearerToken', 1, 1, 'THEORY'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)

    })

    test('Should dispatch (theory) sessions', () => {

        const expectedActions = [
            {type: actions.THEORY_SESSIONS, sessionsValues: []}
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

        fetchMock.mock(String.format(FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL, 1, 1, 'THEORY'), 200,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearerToken'
                },
            })

        store.dispatch(getSessionsAction('bearerToken', 1, 1, 'THEORY'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)

    })

    test('Should dispatch (practice) sessions', () => {

    })

    test('Should dispatch (seminar) sessions', () => {

    })

    test('Should dispatch (group_tutorship) sessions', () => {

    })

    test('Should dispacth unknownError (fails findLastYearSubjectSessionsRequest request)', (done) => {
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

        fetchMock.mock(CERTIFY_ATTENDANCE_URL, {throws: 'Server not found'})

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)
    })

    test('Should dispacth unknownError (fails findStudentSessionAttendance request)', (done) => {
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

        fetchMock.mock(CERTIFY_ATTENDANCE_URL, {throws: 'Server not found'})

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)
    })

})