import { AUTHENTICATE, DONT_AUTHENTICATE } from '../actions'

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