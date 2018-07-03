import I18n from '../resources/i18n'

const initialState = []

export default function errorReducer(state = initialState, action) {
    console.log('Entra a: error-reducer')
    switch (action.type) {
        case 'OFFLINE':
            return [...state, I18n.t('error_sin_conexion')]
        case 'DELETE':
            return state.filter((element, pos) => pos != action.value)
        default:
            return state
    }
}