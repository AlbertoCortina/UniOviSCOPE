import { NO_CONNECTION, WRONG_CREDENTIALS, UNKNOWN_ERROR, DELETE_ERROR } from '../actions'
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
        case DELETE_ERROR:
            return state.filter((element, pos) => pos != action.position)
        default:
            return state
    }
}