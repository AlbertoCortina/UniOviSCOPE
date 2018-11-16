import {deleteNotification, loading} from '../actions'

export default function deleteNotificationAction(position) {
    return (dispatch) => {
        dispatch(deleteNotification(position))
    }
}