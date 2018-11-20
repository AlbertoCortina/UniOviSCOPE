import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('VerifyQRCode Action', () => {
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

    })

    test('Should dispatch validateAttendaceCertificate', (done) => {

    })

    test('Should dispatch dontValidateAttendaceCertificate', (done) => {

    })

    test('Should dispatch unknownError (fails verifyAttendanceCertificate request)',(done) => {

    })

})