import * as actions from '../../app/actions'
import {SUBJECTS} from '../../app/actions'

describe('Action Creators', () => {

    test('Should create loading action', () => {

        const expectedAction = {
            type: actions.LOADING
        }

        expect(actions.loading()).toEqual(expectedAction)

    })

    test('Should create notLoading action', () => {

        const expectedAction = {
            type: actions.NOT_LOADING
        }

        expect(actions.notLoading()).toEqual(expectedAction)

    })

    test('Should create authenticate action', () => {

        const expectedAction = {
            type: actions.AUTHENTICATE,
            bearerToken: 'bearerToken',
            id: 'id',
            dni: 'dni',
            username: 'username',
            firstname: 'firstname',
            lastname: 'lastname',
            firstnameAndLastname: 'firstnameAndLastname',
            email: 'email',
            role: 'role',
        }

        expect(actions.authenticate('bearerToken', 'id', 'dni', 'username', 'firstname',
            'lastname', 'firstnameAndLastname', 'email', 'role')).toEqual(expectedAction)

    })

    test('Should create dontAuthenticate action', () => {

        const expectedAction = {
            type: actions.DONT_AUTHENTICATE
        }

        expect(actions.dontAuthenticate()).toEqual(expectedAction)

    })

    test('Should create noConnectionError action', () => {

        const expectedAction = {
            type: actions.NO_CONNECTION
        }

        expect(actions.noConnectionError()).toEqual(expectedAction)

    })

    test('Should create wrongCredentialsError action', () => {

        const expectedAction = {
            type: actions.WRONG_CREDENTIALS
        }

        expect(actions.wrongCredentialsError()).toEqual(expectedAction)

    })

    test('Should create unknownError action', () => {

        const expectedAction = {
            type: actions.UNKNOWN_ERROR
        }

        expect(actions.unknownError()).toEqual(expectedAction)

    })

    test('Should create deleteNotification action', () => {

        const expectedAction = {
            type: actions.NOTIFICATION,
            position: 0
        }

        expect(actions.deleteNotification(0)).toEqual(expectedAction)

    })

    test('Should create landingScreenHomeScreen action', () => {

        const expectedAction = {
            type: actions.LANDING_SCREEN_HOME_SCREEN
        }

        expect(actions.landingScreenHomeScreen()).toEqual(expectedAction)

    })

    test('Should create landingScreenCertifyScreen action', () => {

        const expectedAction = {
            type: actions.LANDING_SCREEN_CERTIFY_SCREEN
        }

        expect(actions.landingScreenCertifyScreen()).toEqual(expectedAction)

    })

    test('Should create faceRecognitionOn action', () => {

        const expectedAction = {
            type: actions.FACE_RECOGNITION_ON
        }

        expect(actions.faceRecognitionOn()).toEqual(expectedAction)

    })

    test('Should create faceRecognitionOff action', () => {

        const expectedAction = {
            type: actions.FACE_RECOGNITION_OFF
        }

        expect(actions.faceRecognitionOff()).toEqual(expectedAction)

    })

    test('Should create subjects action', () => {

        const expectedAction = {
            type: actions.SUBJECTS,
            subjects: [{id: 1}, {id: 2}]
        }

        expect(actions.subjects([{id: 1}, {id: 2}])).toEqual(expectedAction)

    })

    test('Should create sessions action', () => {

        const expectedAction = {
            type: 'any',
            sessionsValues: [{id: 1}, {id: 2}]
        }

        expect(actions.sessions('any', [{id: 1}, {id: 2}])).toEqual(expectedAction)

    })

    test('Should create validateAttendaceCertificate action', () => {

        const expectedAction = {
            type: actions.VALIDATE_ATTENDANCE_CERTIFICATE,
            username: 'username',
            sessionToken: 'sessionToken',
            timestamp: 123456
        }

        expect(actions.validateAttendaceCertificate('username', 'sessionToken',
            123456)).toEqual(expectedAction)

    })

    test('Should create dontValidateAttendaceCertificate action', () => {

        const expectedAction = {
            type: actions.DONT_VALIDATE_ATTENDANCE_CERTIFICATE
        }

        expect(actions.dontValidateAttendaceCertificate()).toEqual(expectedAction)

    })

    test('Should create certify action', () => {

        const expectedAction = {
            type: actions.CERTIFY_ATTENDANCE
        }

        expect(actions.certify()).toEqual(expectedAction)

    })

    test('Should create dontCertifyAttendance action', () => {

        const expectedAction = {
            type: actions.DONT_CERTIFY_ATTENDANCE
        }

        expect(actions.dontCertifyAttendance()).toEqual(expectedAction)

    })

})