import { AUTHENTICATE, DONT_AUTHENTICATE } from '../actions'

const initialState = {
    token: undefined,
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
            }        
        default:
            return state
    }
}