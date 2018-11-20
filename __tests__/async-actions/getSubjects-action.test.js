import fetchMock from "fetch-mock";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions'
import getSubjectsAction from '../../app/actions/getSubjects-action'
import {FIND_LAST_YEAR_SUBJECTS_URL} from '../../app/util'

const mockStore = configureMockStore([thunk])

describe('GetSubjects Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
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

        store.dispatch(getSubjectsAction('bearerToken', 1))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
        }, 1000)

    })

    test('Should dispatch subjects', (done) => {

        const expectedActions = [
            {type: actions.SUBJECTS}
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
            .mock(String.format(FIND_LAST_YEAR_SUBJECTS_URL, 1), 200, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearerToken'
                },
            })

        store.dispatch(getSubjectsAction('bearerToken', 1))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)


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

        fetchMock.mock(String.format(FIND_LAST_YEAR_SUBJECTS_URL, 1), {throws: 'Server not found'})

        store.dispatch(getSubjectsAction('bearerToken', 1))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)
    })

})