import {
    GROUP_TUTORSHIP_SESSIONS,
    PRACTICE_SESSIONS,
    SEMINAR_SESSIONS,
    THEORY_SESSIONS
} from "../actions";

/**
 * Estado inicial.
 *
 * @type {{theory: Array, practice: Array, seminar: Array, group_tutorship: Array}}
 */
const initialState = {
    theory: [],
    practice: [],
    seminar: [],
    group_tutorship: [],
}

/**
 * Reducer para modificar el estado de las sesiones del estudiante.
 *
 * @param state
 * @param action
 * @returns {{theory: Array, practice: Array, seminar: Array, group_tutorship: Array}}
 */
export default function sessionsReducer(state = initialState, action) {
    switch (action.type) {
        case THEORY_SESSIONS:
            return {...state, theory: action.sessionsValues}
        case PRACTICE_SESSIONS:
            return {...state, practice: action.sessionsValues}
        case SEMINAR_SESSIONS:
            return {...state, seminar: action.sessionsValues}
        case GROUP_TUTORSHIP_SESSIONS:
            return {...state, group_tutorship: action.sessionsValues}
        default:
            return state
    }
}