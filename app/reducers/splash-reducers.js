const initialState = {
    token: null,
    isLoadingApp: true    
}

export function checkAuthenticationReducer(state = initialState, action) {
    switch (action.type) {
        case 'PERMIT':
            return {
                ...state,
                token: action.value,
                isLoadingApp: false
            }
        case 'DENY':
            return {
                ...state,
                token: null,
                isLoadingApp: false
            }
        default:
            return state
    }
}