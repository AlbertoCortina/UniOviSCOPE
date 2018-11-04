import * as actions from '../../app/actions/index'
import deleteErrorAction from '../../app/actions/deleteError-action'
import mockStore from "../util/redux-mock-store";

describe('DeleteError action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch deleteError action', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.DELETE_ERROR, position: 0}
        ]

        store.dispatch(deleteErrorAction(0))
        expect(store.getActions()).toEqual(expectedActions)

    })

})