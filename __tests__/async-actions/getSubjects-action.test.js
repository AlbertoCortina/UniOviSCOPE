import fetchMock from "fetch-mock";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions'
import getSubjectsAction from '../../app/actions/getSubjects-action'
import {FIND_LAST_YEAR_SUBJECTS_URL} from '../../app/util'

const mockStore = configureMockStore([thunk])

describe('GetSubjects Action', () => {
    let store
    const bearerToken = 'bearerToken'
    const idStudent = 1

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
        });

        store.dispatch(getSubjectsAction(bearerToken, idStudent))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch subjects', (done) => {

        const expectedActions = [
            {
                type: actions.SUBJECTS,
                subjects: [
                    {
                        id: 1,
                        code: 'code1',
                        denomination: 'denomination1',
                        course: 'Primero',
                        temporality: 'temporality1'
                    },
                    {
                        id: 2,
                        code: 'code2',
                        denomination: 'denomination2',
                        course: 'Segundo',
                        temporality: 'temporality2'
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
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_URL, idStudent),
                [
                    {
                        id: 1,
                        code: 'code1',
                        denomination: 'denomination1',
                        course: 1,
                        temporality: 'temporality1'
                    },
                    {
                        id: 2,
                        code: 'code2',
                        denomination: 'denomination2',
                        course: 2,
                        temporality: 'temporality2'
                    }
                ]
            )

        store.dispatch(getSubjectsAction(bearerToken, idStudent))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch unknownError (fails findLastYearSubjects request)', (done) => {

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

        fetchMock.mock(String.format(FIND_LAST_YEAR_SUBJECTS_URL, idStudent), {throws: 'Server not found'})

        store.dispatch(getSubjectsAction(bearerToken, idStudent))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

})