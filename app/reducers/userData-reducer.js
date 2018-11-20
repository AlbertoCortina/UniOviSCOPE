import {AUTHENTICATE, DONT_AUTHENTICATE} from '../actions'

/**
 * Estado inicial.
 *
 * @type {{bearerToken: null, id: null, dni: null, username: null,
 * firstname: null, lastname: null, firstnameAndLastname: null, email: null,
 * role: null}}
 */
const initialState = {
    bearerToken: null,
    id: null,
    dni: null,
    username: null,
    firstname: null,
    lastname: null,
    firstnameAndLastname: null,
    email: null,
    role: null,
}

/**
 * Reducer para modificar el estado de la información del usuario.
 *
 * @param state
 * @param action
 * @returns {{bearerToken: null, id: null, dni: null, username: null,
 * firstname: null, lastname: null, firstnameAndLastname: null,
 * email: null, role: null}}
 */
export default function userDataReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                bearerToken: action.bearerToken,
                id: action.id,
                dni: action.dni,
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                firstnameAndLastname: action.firstnameAndLastname,
                email: action.email,
                role: action.role,
            }
        case DONT_AUTHENTICATE:
            return {
                ...state,
                bearerToken: null,
                id: null,
                dni: null,
                username: null,
                firstname: null,
                lastname: null,
                firstnameAndLastname: null,
                email: null,
                role: null,
            }
        default:
            return state
    }
}