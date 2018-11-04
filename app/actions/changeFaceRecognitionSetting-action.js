import {loading,faceRecognitionOn, faceRecognitionOff, ON, OFF} from "../actions";

export default function changeFaceRecognitionSettingAction(currentSetting) {
    return (dispatch) => {
        dispatch(loading())
        if (currentSetting === ON) {
            dispatch(faceRecognitionOff())
        } else if (currentSetting === OFF) {
            dispatch(faceRecognitionOn())
        }
    }
}