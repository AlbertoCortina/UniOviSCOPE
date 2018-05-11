/*
GLOBAL 

{
    login: {
        estado: EN_CURSO | NO_LOGUEADO | LOGUEADO
    }
}

*/

const initialState = {
    state: 'NOT_LOGGED'
}

export function login(state = initialState, action) {
    switch(action.type) {
        case 'EN_CURSO':
            return {
                state: 'EN_CURSO'
            };
            case 'LOGEADO':
            return {
                state: 'LOGEADO'
            };
        default:
            return state;
    }
}

