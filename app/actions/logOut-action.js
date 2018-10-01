import {dontAuthenticate, loading} from '../actions'

export default function logOutAction() {
    return (dispatch) => {
        dispatch(loading())

        setTimeout(function () {
            dispatch(dontAuthenticate())
        }, 1000)
    }
}