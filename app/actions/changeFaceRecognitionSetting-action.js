import {faceRecognitionOff, faceRecognitionOn, OFF, ON} from '../actions'

/**
 * Acción que cambia la preferencia del usuario del
 * reconocimiento facial.
 *
 * @param currentSetting referencia actual del usuario.
 * @returns {Function}
 */
export default function changeFaceRecognitionSettingAction(currentSetting) {
    return (dispatch) => {
        if (currentSetting === ON) {
            dispatch(faceRecognitionOff())
        } else if (currentSetting === OFF) {
            dispatch(faceRecognitionOn())
        }
    }
}