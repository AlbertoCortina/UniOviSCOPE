import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import StartScreen from '../screens/start-screen'

const mapStateToProps = (state, props) => {
    console.log("Estado global redux:", state)
    return {
        isAuthenticated: state.userData.bearerToken !== null,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {}
    return bindActionCreators(actions, dispatch)
}

const StartContainer = connect(mapStateToProps, mapDispatchToProps)(StartScreen)

export default StartContainer