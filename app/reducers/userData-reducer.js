import { AUTHENTICATE, DONT_AUTHENTICATE } from '../actions'

const initialState = {
    token: null,
    id: null,
    dni: null,
    username: null,
    firstname: null,
    lastname: null,
    firstNameAndLastName: null,
    email: null,
    role: null,
}

export default function userDataReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                token: action.token,
                id: action.id,
                dni: action.dni,
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                firstNameAndLastName: action.firstnameAndLastname,
                email: action.email,
                role: action.role,
            }
        case DONT_AUTHENTICATE:
            return {
                ...state,
                token: null,
                id: null,
                dni: null,
                username: null,
                firstname: null,
                lastname: null,
                firstNameAndLastName: null,
                email: null,
                role: null,
            }
        default:
            return state
    }
}