import {
    CERTIFY_ATTENDANCE,
    DONT_CERTIFY_ATTENDANCE,
    DONT_VALIDATE_ATTENDANCE_CERTIFICATE,
    NO_CONNECTION,
    NOTIFICATION,
    UNKNOWN_ERROR,
    WRONG_CREDENTIALS
} from '../actions'
import I18n from '../resources/i18n'

const initialState = []

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case NO_CONNECTION:
            return [...state, {
                description: I18n.t('error_sin_conexion'),
                notificationType: 'danger'
            }]
        case WRONG_CREDENTIALS:
            return [...state, {
                description: I18n.t('error_datos_invalidos'),
                notificationType: 'danger'
            }]
        case UNKNOWN_ERROR:
            return [...state, {
                description: I18n.t('error_desconocido'),
                notificationType: 'danger'
            }]
        case DONT_VALIDATE_ATTENDANCE_CERTIFICATE:
            return [...state, {
                description: I18n.t('error_codigo_qr_invalido_descripcion'),
                notificationType: 'warning'
            }]
        case DONT_CERTIFY_ATTENDANCE:
            return [...state, {
                description: I18n.t('error_certificar_presencia'),
                notificationType: 'danger'
            }]
        case CERTIFY_ATTENDANCE:
            return [...state, {
                description: I18n.t('certificar_presencia_correcto'),
                notificationType: 'success'
            }]
        case NOTIFICATION:
            return state.filter((element, pos) => pos != action.position)
        default:
            return state
    }
}