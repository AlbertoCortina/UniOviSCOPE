import {CERTIFY_SCREEN, HOME_SCREEN, landingScreenCertifyScreen, landingScreenHomeScreen, loading} from "../actions";

/**
 * Método que cambia la preferencia del usuario de pantalla de inicio de la aplicacion.
 *
 * @param currentSetting Preferencia actual del usuario.
 * @returns {Function}
 */
export default function changeLandingScreenSettingAction(currentSetting) {
    return (dispatch) => {
        if (currentSetting === HOME_SCREEN) {
            dispatch(landingScreenCertifyScreen())
        } else if (currentSetting === CERTIFY_SCREEN) {
            dispatch(landingScreenHomeScreen())
        }
    }
}