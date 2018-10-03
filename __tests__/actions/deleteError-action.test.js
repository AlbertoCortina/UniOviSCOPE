import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions'
import thunk from 'redux-thunk'
import deleteErrorAction from '../../app/actions/deleteError-action'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('DeleteError action', () => {

    it('Should dispatch deleteError action', () => {
        const expectedActions = [
            {type: actions.DELETE_ERROR, position: 0}
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

        store.dispatch(deleteErrorAction(0))
        expect(store.getActions()).toEqual(expectedActions)
    })

})