import * as actions from '../../app/actions/index'
import logOutAction from '../../app/actions/logOut-action'
import mockStore from "../util/redux-mock-store";

jest.useFakeTimers()

describe('LogOut Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })


    it('Should dispatch loading and dontAuthenticate action', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.DONT_AUTHENTICATE}
        ]

        store.dispatch(logOutAction())
        jest.runAllTimers()
        expect(store.getActions()).toEqual(expectedActions)
    })

})