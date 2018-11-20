import reducer from '../../app/reducers/sessions-reducer'
import * as actions from '../../app/actions'

const initialState = {
    theory: [],
    practice: [],
    seminar: [],
    group_tutorship: [],
}

describe('Sessions Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle THEORY_SESSIONS', () => {
        expect(reducer(initialState, actions.sessions(actions.THEORY_SESSIONS, [{id: 1}, {id: 2}]))).toEqual({
                theory: [{id: 1}, {id: 2}],
                practice: [],
                seminar: [],
                group_tutorship: [],
            }
        )
    })

    test('Should handle PRACTICE_SESSIONS', () => {
        expect(reducer(initialState, actions.sessions(actions.PRACTICE_SESSIONS, [{id: 1}, {id: 2}]))).toEqual({
                theory: [],
                practice: [{id: 1}, {id: 2}],
                seminar: [],
                group_tutorship: [],
            }
        )
    })

    test('Should handle SEMINAR_SESSIONS', () => {
        expect(reducer(initialState, actions.sessions(actions.SEMINAR_SESSIONS, [{id: 1}, {id: 2}]))).toEqual({
                theory: [],
                practice: [],
                seminar: [{id: 1}, {id: 2}],
                group_tutorship: [],
            }
        )
    })

    test('Should handle GROUP_TUTORSHIP_SESSIONS', () => {
        expect(reducer(initialState, actions.sessions(actions.GROUP_TUTORSHIP_SESSIONS, [{id: 1}, {id: 2}]))).toEqual({
                theory: [],
                practice: [],
                seminar: [],
                group_tutorship: [{id: 1}, {id: 2}],
            }
        )
    })

})