import reducer from '../../app/reducers/notification-reducer'
import * as actions from '../../app/actions'
import I18n from '../../app/resources/i18n'

const initialState = []

describe('Notification Reducer', () => {

    test('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('Should handle NO_CONNECTION', () => {
        expect(reducer(initialState, actions.noConnectionError())).toEqual(
            [{
                description: I18n.t('error_sin_conexion'),
                notificationType: 'danger'
            }]
        )
    })

    test('Should handle WRONG_CREDENTIALS', () => {
        expect(reducer(initialState, actions.wrongCredentialsError())).toEqual(
            [{
                description: I18n.t('error_datos_invalidos'),
                notificationType: 'danger'
            }]
        )
    })

    test('Should handle UNKNOWN_ERROR', () => {
        expect(reducer(initialState, actions.unknownError())).toEqual(
            [{
                description: I18n.t('error_desconocido'),
                notificationType: 'danger'
            }]
        )
    })

    test('Should handle DONT_VALIDATE_ATTENDANCE_CERTIFICATE', () => {
        expect(reducer(initialState, actions.dontValidateAttendaceCertificate())).toEqual(
            [{
                description: I18n.t('error_codigo_qr_invalido_descripcion'),
                notificationType: 'warning'
            }]
        )
    })

    test('Should handle DONT_CERTIFY_ATTENDANCE', () => {
        expect(reducer(initialState, actions.dontCertifyAttendance())).toEqual(
            [{
                description: I18n.t('error_certificar_presencia'),
                notificationType: 'danger'
            }]
        )
    })

    test('Should handle CERTIFY_ATTENDANCE', () => {
        expect(reducer(initialState, actions.certify())).toEqual(
            [{
                description: I18n.t('certificar_presencia_correcto'),
                notificationType: 'success'
            }]
        )
    })

    test('Should handle NOTIFICATION', () => {
        let errors = [{description: 'test description', type: 'test type'}]
        expect(reducer(errors, actions.deleteNotification(0))).toEqual(
            []
        )

        errors = [{description: 'test description1', type: 'test type1'}, {
            description: 'test description2',
            type: 'test type2'
        }]
        expect(reducer(errors, actions.deleteNotification(1))).toEqual(
            [{description: 'test description1', type: 'test type1'}]
        )
    })

})