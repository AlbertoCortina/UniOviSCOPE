import reducer from '../../app/reducers/settings-reducer'
import * as actions from '../../app/actions'

const initialState = {
    landingScreen: 'Home',
    faceRecognition: 'OFF'
}

describe('Settings Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle LANDING_SCREEN_HOME_SCREEN', () => {
        expect(reducer(initialState, actions.landingScreenHomeScreen())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CertifyAttendance',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.landingScreenHomeScreen())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })
    })

    test('Should handle LANDING_SCREEN_CERTIFY_SCREEN', () => {
        expect(reducer(initialState, actions.landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CertifyAttendance',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.landingScreenHomeScreen())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CertifyAttendance',
            faceRecognition: 'OFF'
        })
    })

    test('Should handle FACE_RECOGNITION_ON', () => {
        expect(reducer(initialState, actions.faceRecognitionOn())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, actions.faceRecognitionOff())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.faceRecognitionOn())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'ON'
        })
    })

    test('Should handle FACE_RECOGNITION_OFF', () => {
        expect(reducer(initialState, actions.faceRecognitionOff())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, actions.faceRecognitionOn())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, actions.faceRecognitionOff())).toEqual({
            landingScreen: 'Home',
            faceRecognition: 'OFF'
        })
    })

})