import reducer from '../../app/reducers/settings-reducer'
import {landingScreenHomeScreen, landingScreenCertifyScreen, faceRecognitionOn, faceRecognitionOff} from "../../app/actions";

const initialState = {
    landingScreen: 'HOME',
    faceRecognition: 'ON'
}

describe('Settings Reducer',() => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle LANDING_SCREEN_HOME_SCREEN', () => {
        expect(reducer(initialState, landingScreenHomeScreen())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CERTIFY',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, landingScreenHomeScreen())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })
    })

    it('Should handle LANDING_SCREEN_CERTIFY_SCREEN', () => {
        expect(reducer(initialState, landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CERTIFY',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, landingScreenHomeScreen())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, landingScreenCertifyScreen())).toEqual({
            landingScreen: 'CERTIFY',
            faceRecognition: 'ON'
        })
    })

    it('Should handle FACE_RECOGNITION_ON', () => {
        expect(reducer(initialState, faceRecognitionOn())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, faceRecognitionOff())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, faceRecognitionOn())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })
    })

    it('Should handle FACE_RECOGNITION_OFF', () => {
        expect(reducer(initialState, faceRecognitionOff())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'OFF'
        })

        expect(reducer(initialState, faceRecognitionOn())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'ON'
        })

        expect(reducer(initialState, faceRecognitionOff())).toEqual({
            landingScreen: 'HOME',
            faceRecognition: 'OFF'
        })
    })

})