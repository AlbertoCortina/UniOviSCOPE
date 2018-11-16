import React from 'react'
import {Toast} from 'native-base'
import I18n from '../../resources/i18n'

/**
 * Clase Notification.
 *
 * Componente personalizado para mostrar las notificaiones de tipo toast de la
 * aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
class Notification extends React.Component {

    componentDidUpdate() {
        if (this.props.notifications.length != 0) {
            Toast.show({
                text: this.props.notifications[0].description,
                buttonText: I18n.t('toast_aceptar'),
                duration: 3000,
                type: this.props.notifications[0].notificationType,
                position: 'bottom'
            })
            this.props.deleteNotification(0)
        }
    }

    render() {
        return null
    }

}

export default Notification