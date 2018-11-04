import {
    NO_CONNECTION,
    WRONG_CREDENTIALS,
    UNKNOWN_ERROR,
    DELETE_ERROR,
    DONT_VALIDATE_ATTENDANCE_CERTIFICATE, CERTIFY_ATTENDANCE, DONT_CERTIFY_ATTENDANCE
} from '../actions'
import I18n from '../resources/i18n'

const initialState = []

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case NO_CONNECTION:
            return [...state, { description: I18n.t('error_sin_conexion'), errorType: 'danger' }]
        case WRONG_CREDENTIALS:
            return [...state, { description: I18n.t('error_datos_invalidos'), errorType: 'danger' }]
        case UNKNOWN_ERROR:
            return [...state, { description: I18n.t('error_desconocido'), errorType: 'danger' }]
        case DONT_VALIDATE_ATTENDANCE_CERTIFICATE:
            return [...state, { description: I18n.t('error_codigo_qr_invalido_descripcion'), errorType: 'warning' }]
        case DONT_CERTIFY_ATTENDANCE:
            return [...state, { description: I18n.t('error_certificar_presencia'), errorType: 'danger' }]
        case CERTIFY_ATTENDANCE:
            return [...state, { description: I18n.t('certificar_presencia_correcto'), errorType: 'success' }]
        case DELETE_ERROR:
            return state.filter((element, pos) => pos != action.position)
        default:
            return state
    }
}