import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions/index'
import thunk from 'redux-thunk'
import logInAction from '../../app/actions/logIn-action'
import logOutAction from "../../app/actions/logOut-action";
import fetchMock from 'fetch-mock'
import {LOG_IN_URL} from "../../app/util";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.useFakeTimers()

describe('LogIn Action', () => {
    let store

    beforeEach(() => {
        store = mockStore({
            userData: {
                token: null,
                id: null,
                dni: null,
                username: null,
                firstname: null,
                lastname: null,
                firstNameAndLastName: null,
                email: null,
                role: null,
            }
        })
    })

    afterEach(() => {
        fetchMock.restore()
    })

    test('Should dispatch loading and noConnection', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.NO_CONNECTION}
        ]

        store.dispatch(logInAction('UO123456', '123456'))
        jest.runAllTimers()
        expect(store.getActions()).toEqual(expectedActions)
    })

    test('Should dispatch loadging and wrongCredentials', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.AUTHENTICATE}
        ]

        fetchMock.mock(LOG_IN_URL, 200)

        store.dispatch(logInAction('UO123456', '123456'))
        jest.runAllTimers()
        expect(store.getActions()).toEqual(expectedActions)
    })
})