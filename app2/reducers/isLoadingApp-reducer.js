import { LOADING, NOT_LOADING, OFFLINE, ERROR} from '../actions'

const initialState = false

export default function isLoadingAppReducer(state = initialState, action) {
    console.log('Entra a: isLoadingApp-reducer')
    switch (action.type) {
        case LOADING:
            return true
        case NOT_LOADING:
            return false
        case ERROR:
            return 'ERROR'
        default:
            return state
    }
}