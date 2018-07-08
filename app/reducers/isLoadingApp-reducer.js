import { LOADING, NOT_LOADING } from '../actions'

const initialState = false

export default function isLoadingAppReducer(state = initialState, action) {
    console.log('Entra a: isLoadingApp-reducer')
    switch (action.type) {
        case LOADING:
            return true
        case NOT_LOADING:
            return false
        default:
            return state
    }
}