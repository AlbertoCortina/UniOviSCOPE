import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginAction } from '../actions/login-action'
import LoginScreen from '../components/screens/login-screen'

const mapStateToProps = (state, props) => {
    return {
        isLoadingApp: state.isLoadingApp,
        isAuthenticated: state.loginData.token !== null && state.loginData.token !== undefined,
        state: state.loginData.state,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         login: loginAction,
    }
    return bindActionCreators(actions, dispatch)
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default LoginContainer