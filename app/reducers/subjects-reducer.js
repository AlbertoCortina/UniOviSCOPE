import {SUBJECTS} from "../actions";

const initialState = []

export default function subjectsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBJECTS:
            return action.subjects
        default:
            return state
    }
}