/**
 * Splash Container.
 */
import React from 'react'
import SplashScreen from '../components/screens/splash-screen'
import LoginScreen from '../components/screens/login-screen'
import HomeScreen from '../components/screens/home-screen'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuthenticationAction } from '../actions/splash-actions'
import { loginAction, resetLoggingStateAction } from '../actions/login-actions'
import HomeContainer from './home-container';

class LoginContainer extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.checkAuthenticationAction(), 1000)
    }

    // Esto es solo para usar Expo
    componentWillMount() {
        this.loadFonts()
    }
    // Esto es solo para usar Expo
    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
    }

    render() {
        if (this.props.isLoadingApp) {
            return (
                <SplashScreen />
            )
        } else if (!this.props.isAuthenticated) {
            return (
                <LoginScreen {...this.props} />
            )
        } else if (this.props.isAuthenticated) {
            return (
                <HomeContainer />
            )
        }
    }
}

/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
function mapStateToProps(state, props) {
    console.log('Estado:', state)
    return {
        isAuthenticated: state.checkAuthenticationReducer.token !== null,
        isLoadingApp: state.checkAuthenticationReducer.isLoadingApp,
        loggingState: state.loginReducer.login.loggingState
    }
}

/**
 * 
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    const actions = {
        checkAuthenticationAction: checkAuthenticationAction,
        loginAction: loginAction,
        resetLoggingStateAction: resetLoggingStateAction
    }
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)