import * as actions from '../../app/actions/index'
import deleteNotificationAction
    from '../../app/actions/deleteNotification-action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('DeleteNotification action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch deleteNotification action', (done) => {

        const expectedActions = [
            {type: actions.NOTIFICATION, position: 0}
        ]

        store.dispatch(deleteNotificationAction(0))

        expect(store.getActions()).toEqual(expectedActions)
        done()

    })

})