import { deleteError, loading } from '../actions'

export default function deleteErrorAction(position) {
    return (dispatch) => {
        dispatch(loading())
        dispatch(deleteError(position))
    }
}