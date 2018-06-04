const initialState = {
    login: {
        loggingState: null
    }
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'IN_PROGRESS':
            return {
                ...state, login: {
                    loggingState: 'IN_PROGRESS'
                }
            }
        case 'LOGGED':
            return {
                ...state, login: {
                    loggingState: 'LOGGED'
                }
            }
        case 'NOT_LOGGED':
            return {
                ...state, login: {
                    loggingState: 'NOT_LOGGED'
                }
            }
        case 'ERROR':
            return {
                ...state, login: {
                    loggingState: 'ERROR'
                }
            }
        case 'EMPTY':
            return {
                ...state, login: {
                    loggingState: 'EMPTY'
                }
            }
        case 'OFFLINE':
            return {
                ...state, login: {
                    loggingState: 'OFFLINE'
                }
            }
        default:
            return state;
    }
}
