import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuthenticationAction } from '../actions/checkAuthentication-action';
import StartScreen from '../components/screens/start-screen'

const mapStateToProps = (state, props) => {
    console.log("Estado global redux:", state);
    return {
        isAuthenticationChecked: state.loginData.token !== undefined,
        isAuthenticated: state.loginData.token !== null && state.loginData.token !== undefined,
        isLoading: state.isLoadingApp
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