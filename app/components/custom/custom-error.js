/**
 * Custom Error
 * 
 * Componente personalizado para mostrar los errores.
 */
import React from 'react'
import { Toast } from 'native-base'
import I18n from '../../resources/i18n'

class Error extends React.Component {

    componentDidUpdate() {
        if (this.props.errors.length != 0) {
            Toast.show({
                text: this.props.errors[0].description,
                buttonText: I18n.t('toast_aceptar'),
                duration: 3000,
                type: this.props.errors[0].errorType,
            })
            this.props.deleteError(0)
        }
    }

    render() {
        return null;
    }
}

export default Error