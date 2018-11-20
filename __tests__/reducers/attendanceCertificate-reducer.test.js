import reducer from '../../app/reducers/attendanceCertificate-reducer'
import * as actions from '../../app/actions'

const initialState = {
    validated: false,
    username: null,
    sessionToken: null,
    timestamp: null,
}

describe('AttendanceCertificate Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle VALIDATE_ATTENDANCE_CERTIFICATE', () => {
        expect(reducer(initialState, actions.validateAttendaceCertificate('UO123456', 'sessionToken', 123456))).toEqual({
                validated: true,
                username: 'UO123456',
                sessionToken: 'sessionToken',
                timestamp: 123456
            }
        )
    })

    test('Should handle DONT_VALIDATE_ATTENDANCE_CERTIFICATE', () => {
        expect(reducer(initialState, actions.dontValidateAttendaceCertificate())).toEqual({
                validated: false,
                username: null,
                sessionToken: null,
                timestamp: null
            }
        )
    })

})