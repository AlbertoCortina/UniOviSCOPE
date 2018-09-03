import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginAction } from '../actions/login-action'
import LoginScreen from '../components/screens/login-screen'

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.isLoadingApp
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