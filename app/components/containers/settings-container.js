import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SettingsScreen from '../screens/settings-screen'
import changeFaceRecognitionSettingAction
    from '../../actions/changeFaceRecognitionSetting-action'
import changeLandingScreenSettingAction
    from '../../actions/changeLandingScreenSetting-action'

const mapStateToProps = (state, props) => {
    return {
        faceRecognition: state.settings.faceRecognition,
        landingScreen: state.settings.landingScreen,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        changeFaceRecognitionSetting: changeFaceRecognitionSettingAction,
        changeLandingScreenSetting: changeLandingScreenSettingAction,
    }
    return bindActionCreators(actions, dispatch)
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

export default SettingsContainer