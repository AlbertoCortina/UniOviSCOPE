import * as actions from '../../app/actions/index'
import logOutAction from '../../app/actions/logOut-action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('LogOut Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch loading and dontAuthenticate action', (done) => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.DONT_AUTHENTICATE}
        ]

        store.dispatch(logOutAction())

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 2000)

    })

})