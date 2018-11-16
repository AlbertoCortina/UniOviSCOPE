import reducer from '../../app/reducers/notification-reducer'
import {noConnectionError, wrongCredentialsError, unknownError, deleteNotification} from "../../app/actions";
import I18n from "../../app/resources/i18n";

const initialState = []

describe('Notification Reducer', () => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle NO_CONNECTION', () => {
        expect(reducer(initialState, noConnectionError())).toEqual(
            [{description: I18n.t('error_sin_conexion'), notificationType: 'danger'}]
        )
    })

    it('Should handle WRONG_CREDENTIALS', () => {
        expect(reducer(initialState, wrongCredentialsError())).toEqual(
            [{description: I18n.t('error_datos_invalidos'), notificationType: 'danger'}]
        )
    })

    it('Should handle UNKNOWN_ERROR', () => {
        expect(reducer(initialState, unknownError())).toEqual(
            [{description: I18n.t('error_desconocido'), notificationType: 'danger'}]
        )
    })

    it('Should handle NOTIFICATION', () => {
        let errors = [{description: 'test description', type: 'test type'}]
        expect(reducer(errors, deleteNotification(0))).toEqual(
            []
        )

        errors = [{description: 'test description1', type: 'test type1'}, {
            description: 'test description2',
            type: 'test type2'
        }]
        expect(reducer(errors, deleteNotification(1))).toEqual(
            [{description: 'test description1', type: 'test type1'}]
        )
    })

})