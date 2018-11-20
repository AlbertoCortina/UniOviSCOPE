import {deleteNotification} from '../actions'

/**
 * Acción que borra una notificación generada por el sistema.
 *
 * @param position Posición de la notificación en el array de notificaciones.
 * @returns {Function}
 */
export default function deleteNotificationAction(position) {
    return (dispatch) => {
        dispatch(deleteNotification(position))
    }
}