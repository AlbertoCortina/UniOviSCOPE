import { deleteError } from '../actions'

export function deleteErrorAction(position) {
    return dispatch => {
        dispatch(deleteError(position))
    }
}