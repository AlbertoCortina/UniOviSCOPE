import reducer from '../../app/reducers/subjects-reducer'
import * as actions from '../../app/actions'

const initialState = []

describe('Subjects Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle SUBJECTS', () => {
        expect(reducer(initialState, actions.subjects([{id: 1}, {id: 2}]))).toEqual([
            {id: 1}, {id: 2}
        ])
    })

})