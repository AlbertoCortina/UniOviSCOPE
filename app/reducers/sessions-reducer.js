import {THEORY_SESSIONS, PRACTICE_SESSIONS, SEMINAR_SESSIONS, GROUP_TUTORSHIP_SESSIONS} from "../actions";

const initialState = {
    theory: [],
    practice: [],
    seminar: [],
    group_tutorship: [],
}

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