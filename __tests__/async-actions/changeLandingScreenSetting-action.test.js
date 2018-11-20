import * as actions from '../../app/actions/index'
import changeLandingScreenSettingAction
    from '../../app/actions/changeLandingScreenSetting-action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('ChangeLandingScreenSetting Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch landingScreenCertifyScreen action', (done) => {

        const expectedActions = [
            {type: actions.LANDING_SCREEN_CERTIFY_SCREEN},
        ]

        store.dispatch(changeLandingScreenSettingAction(actions.HOME_SCREEN))

        expect(store.getActions()).toEqual(expectedActions)
        done()

    })

    test('Should dispatch landingScreenHomeScreen action', (done) => {

        const expectedActions = [
            {type: actions.LANDING_SCREEN_HOME_SCREEN},
        ]

        store.dispatch(changeLandingScreenSettingAction(actions.CERTIFY_SCREEN))

        expect(store.getActions()).toEqual(expectedActions)
        done()

    })

})