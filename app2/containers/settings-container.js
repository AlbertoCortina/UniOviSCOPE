import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SettingsScreen from '../components/screens/settings-screen'

const mapStateToProps = (state, props) => {
    return {
        firstNameAndLastName: state.loginData.firstNameAndLastName,
        email: state.loginData.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         
    }
    return bindActionCreators(actions, dispatch)
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

export default SettingsContainer