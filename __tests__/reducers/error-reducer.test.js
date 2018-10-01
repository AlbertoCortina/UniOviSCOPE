import reducer from '../../app/reducers/error-reducer'
import {noConnectionError, wrongCredentialsError, unknownError, deleteError} from "../../app/actions";
import I18n from "../../app/resources/i18n";

const initialState = []

describe('Error Reducer', () => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle NO_CONNECTION', () => {
        expect(reducer(initialState, noConnectionError())).toEqual(
            [{description: I18n.t('error_sin_conexion'), errorType: 'danger'}]
        )
    })

    it('Should handle WRONG_CREDENTIALS', () => {
        expect(reducer(initialState, wrongCredentialsError())).toEqual(
            [{description: I18n.t('error_datos_invalidos'), errorType: 'danger'}]
        )
    })

    it('Should handle UNKNOWN_ERROR', () => {
        expect(reducer(initialState, unknownError())).toEqual(
            [{description: I18n.t('error_desconocido'), errorType: 'danger'}]
        )
    })

    it('Should handle DELETE_ERROR', () => {
        let errors = [{description: 'test description', type: 'test type'}]
        expect(reducer(errors, deleteError(0))).toEqual(
            []
        )

        errors = [{description: 'test description1', type: 'test type1'}, {
            description: 'test description2',
            type: 'test type2'
        }]
        expect(reducer(errors, deleteError(1))).toEqual(
            [{description: 'test description1', type: 'test type1'}]
        )
    })

})