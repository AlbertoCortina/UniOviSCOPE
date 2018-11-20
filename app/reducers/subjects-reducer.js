import {SUBJECTS} from '../actions'

/**
 * Estado inicial.
 *
 * @type {Array}
 */
const initialState = []

/**
 * Reducer para modificar el estado de las asignaturas.
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function subjectsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBJECTS:
            return action.subjects
        default:
            return state
    }
}