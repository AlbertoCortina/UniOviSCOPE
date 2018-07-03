import { AUTHENTICATE, DONT_AUTHENTICATE } from '../actions'

const initialState = {
    token: null,
    state: null,
    username: null,
    idStudent: null,
    firstNameAndLastName: null,
    dni: null,
    email: null,
}

export default function loginDataReducer(state = initialState, action) {
    console.log('Entra a: loginData-reducer')
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                token: action.token,
                state: 'AUTHENTICATED',
                username: action.username,
                idStudent: action.idStudent,
                firstNameAndLastName: action.firstNameAndLastName,
                dni: action.dni,
                email: action.email,
            }
        case DONT_AUTHENTICATE:
            return {
                ...state,
                token: null,
                state: 'NOT_AUTHENTICATED',
                username: null,
            }        
        default:
            return state
    }
}