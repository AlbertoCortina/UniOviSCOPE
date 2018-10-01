import reducer from '../../app/reducers/isLoadingApp-reducer'
import {
    loading,
    notLoading,
    authenticate,
    dontAuthenticate,
    noConnectionError,
    wrongCredentialsError,
    unknownError
} from "../../app/actions";

const initialState = false

describe('IsLoadingApp Reducer', () => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle LOADING', () => {
        expect(reducer(initialState, loading())).toEqual(true)
    })

    it('Should handle NOT_LOADING', () => {
        expect(reducer(initialState, notLoading())).toEqual(false)
    })

    it('Should handle AUTHENTICATE', () => {
        expect(reducer(initialState, authenticate())).toEqual(false)
    })

    it('Should handle DONT_AUTHENTICATE', () => {
        expect(reducer(initialState, dontAuthenticate())).toEqual(false)
    })

    it('Should handle NO_CONNECTION', () => {
        expect(reducer(initialState, noConnectionError())).toEqual(false)
    })

    it('Should handle WRONG_CREDENTIALS', () => {
        expect(reducer(initialState, wrongCredentialsError())).toEqual(false)
    })

    it('Should handle UNKNOWN_ERROR', () => {
        expect(reducer(initialState, unknownError())).toEqual(false)
    })

})