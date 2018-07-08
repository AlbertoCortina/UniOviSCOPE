import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuthenticationAction } from '../actions/checkAuthentication-action';
import StartScreen from '../components/screens/start-screen'

const mapStateToProps = (state, props) => {
    console.log("Estado global redux:", state);
    return {
        isLoadingApp: state.isLoadingApp,
        isAuthenticated: state.loginData.token !== null && state.loginData.token !== undefined,
        isSplashScreen: state.currentScreen === 'SPLASH_SCREEN',
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        checkAuthentication: checkAuthenticationAction,
    }
    return bindActionCreators(actions, dispatch)
}

const StartContainer = connect(mapStateToProps, mapDispatchToProps)(StartScreen)

export default StartContainer