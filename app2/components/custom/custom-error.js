import React from 'react'
import { Toast } from 'native-base'
import I18n from '../../resources/i18n'

class Error extends React.Component {

    componentDidUpdate() {
        if (this.props.errors.length != 0) {
            Toast.show({
                text: this.props.errors[0],
                buttonText: I18n.t('toast_aceptar'),
                duration: 3000,
                type: 'danger'
            })
            this.props.deleteError(0)
        }
    }

    render() {
        return null;
    }
}

export default Error

/* if (this.props.isLoadingApp === 'OFFLINE' && !this.state.offline) {
    Toast.show({
        text: I18n.t('error_sin_conexion'),
        buttonText: I18n.t('toast_aceptar'),
        duration: 3000,
        type: 'danger'
    })
    this.state.offline = true
} else if (this.props.isLoadingApp === 'ERROR' && !this.state.error) {
    Toast.show({
        text: I18n.t('error_sin_conexion_servicio'),
        buttonText: I18n.t('toast_aceptar'),
        duration: 3000,
        type: 'danger'
    })
    this.state.error = true
} else if (this.props.state === 'NOT_AUTHENTICATED' && !this.props.isLoadingApp && !this.state.wrong) {
    Toast.show({
        text: I18n.t('datos_invalidos'),
        buttonText: I18n.t('toast_aceptar'),
        duration: 3000,
        type: 'danger'
    })
    this.state.wrong = true
} */