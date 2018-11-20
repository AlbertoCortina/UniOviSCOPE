import * as actions from '../../app/actions/index'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import certifyAttendanceAction from '../../app/actions/certifyAttendance-action'

const mockStore = configureMockStore([thunk])

describe('CertifyAttendance Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        jest.resetModules()
    })

    test('Should dispatch noConnection', (done) => {

        const expectedActions = [
            {type: actions.NO_CONNECTION}
        ]

        jest.mock('rn-fetch-blob', () => {
            return {
                DocumentDir: () => {
                },
                polyfill: () => {
                },
            }
        })
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

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)

    })

    test('Should dispatch certify', (done) => {

        const expectedActions = [
            {type: actions.CERTIFY_ATTENDANCE}
        ]

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)
    })

    test('Should dispatch dontCertifyAttendance', (done) => {

        const expectedActions = [
            {type: actions.DONT_CERTIFY_ATTENDANCE}
        ]

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)
    })

    test('Should dispatch unknownError (fails certifyAttendance request)', (done) => {

        const expectedActions = [
            {type: actions.UNKNOWN_ERROR}
        ]

        store.dispatch(certifyAttendanceAction('image', 'sessionToken', 12345))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)
    })

})