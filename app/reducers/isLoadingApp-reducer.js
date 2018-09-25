import { LOADING, NOT_LOADING, AUTHENTICATE, DONT_AUTHENTICATE, NO_CONNECTION, WRONG_CREDENTIALS, UNKNOWN_ERROR } from '../actions'

const initialState = false

export default function isLoadingAppReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return true
        case NOT_LOADING:
        case AUTHENTICATE:
        case DONT_AUTHENTICATE:
        case NO_CONNECTION:
        case WRONG_CREDENTIALS:
        case UNKNOWN_ERROR:
            return false
        default:
            return state
    }
}