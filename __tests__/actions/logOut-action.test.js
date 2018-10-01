import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions'
import thunk from 'redux-thunk'
import logOutAction from '../../app/actions/logOut-action'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.useFakeTimers()

describe('LogOut Action', () => {

    it('Should dispatch loading and dontAuthenticate action', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.DONT_AUTHENTICATE}
        ]

        const store = mockStore({
            isLoading: false,
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
            },
            errors: [],
        })

        store.dispatch(logOutAction())
        jest.runAllTimers()
        expect(store.getActions()).toEqual(expectedActions)
    })
})