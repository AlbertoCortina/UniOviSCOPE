import reducer from '../../app/reducers/isLoadingApp-reducer'
import * as actions from '../../app/actions'

const initialState = false

describe('IsLoadingApp Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle LOADING', () => {
        expect(reducer(initialState, actions.loading())).toEqual(true)
    })

    test('Should handle NOT_LOADING', () => {
        expect(reducer(initialState, actions.notLoading())).toEqual(false)
    })

    test('Should handle AUTHENTICATE', () => {
        expect(reducer(initialState, actions.authenticate())).toEqual(false)
    })

    test('Should handle DONT_AUTHENTICATE', () => {
        expect(reducer(initialState, actions.dontAuthenticate())).toEqual(false)
    })

    test('Should handle NO_CONNECTION', () => {
        expect(reducer(initialState, actions.noConnectionError())).toEqual(false)
    })

    test('Should handle WRONG_CREDENTIALS', () => {
        expect(reducer(initialState, actions.wrongCredentialsError())).toEqual(false)
    })

    test('Should handle UNKNOWN_ERROR', () => {
        expect(reducer(initialState, actions.unknownError())).toEqual(false)
    })

})