import { deleteError } from '../actions'

export default function deleteErrorAction(position) {
    return (dispatch) => {
        dispatch(deleteError(position))
    }
}