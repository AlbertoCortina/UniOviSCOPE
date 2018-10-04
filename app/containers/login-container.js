import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logInAction from '../actions/logIn-action'
import LoginScreen from '../components/screens/login-screen'

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        logIn: logInAction,
    }
    return bindActionCreators(actions, dispatch)
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default LoginContainer