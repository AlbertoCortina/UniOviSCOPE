import * as actions from '../../app/actions/index'
import deleteNotificationAction from '../../app/actions/deleteNotification-action'
import mockStore from "../util/redux-mock-store";

describe('DeleteError action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch deleteNotification action', () => {
        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.NOTIFICATION, position: 0}
        ]

        store.dispatch(deleteNotificationAction(0))
        expect(store.getActions()).toEqual(expectedActions)

    })

})