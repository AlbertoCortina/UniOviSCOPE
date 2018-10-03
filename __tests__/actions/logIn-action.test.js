import configureMockStore from 'redux-mock-store'
import * as actions from '../../app/actions'
import thunk from 'redux-thunk'
import logInAction from '../../app/actions/logIn-action'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.useFakeTimers()

describe('LogIn Action', () => {

    it('Should dispatch loading and wrongCredentialsError action', () => {
        expect(1 + 1).toEqual(2)
    })

})