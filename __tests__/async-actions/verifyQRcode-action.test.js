import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions'
import verifyQRCodeAction from '../../app/actions/verifyQRCode-action'
import {VERIFY_ATTENDANCE_CERTIFICATE_URL} from '../../app/util'

const mockStore = configureMockStore([thunk])

describe('VerifyQRCode Action', () => {
    let store
    const sessionToken = 'asdf123'
    const bearerToken = 'bearerToken'
    const username = 'UO123456'

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

        store.dispatch(verifyQRCodeAction(sessionToken, bearerToken, username))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch dontValidateAttendaceCertificate', (done) => {

        const expectedActions = [
            {type: actions.DONT_VALIDATE_ATTENDANCE_CERTIFICATE}
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

        fetchMock.mock(VERIFY_ATTENDANCE_CERTIFICATE_URL, 200)

        store.dispatch(verifyQRCodeAction(sessionToken, bearerToken, username))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

    test('Should dispatch unknownError (fails verifyAttendanceCertificate request)', (done) => {

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
        })

        fetchMock.mock(VERIFY_ATTENDANCE_CERTIFICATE_URL, {throws: 'Server not found'})

        store.dispatch(verifyQRCodeAction(sessionToken, bearerToken, username))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 500)

    })

})