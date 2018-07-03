export function deleteErrorAction(position) {
    return dispatch => { 
        dispatch({type: 'DELETE', value: position})
    }

}