import * as actions from '../../app/actions/index'
import changeFaceRecognitionSettingAction
    from '../../app/actions/changeFaceRecognitionSetting-action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('ChangeFaceRecognitionSetting Action', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    test('Should dispatch faceRecognitionOff action', (done) => {

        const expectedActions = [
            {type: actions.FACE_RECOGNITION_OFF},
        ]

        store.dispatch(changeFaceRecognitionSettingAction(actions.ON))

        expect(store.getActions()).toEqual(expectedActions)
        done()

    })

    test('Should dispatch faceRecognitionOn action', (done) => {

        const expectedActions = [
            {type: actions.FACE_RECOGNITION_ON},
        ]

        store.dispatch(changeFaceRecognitionSettingAction(actions.OFF))

        expect(store.getActions()).toEqual(expectedActions)
        done()

    })

})