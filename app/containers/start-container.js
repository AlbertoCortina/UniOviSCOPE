import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StartScreen from '../components/screens/start-screen'

const mapStateToProps = (state, props) => {
    console.log("Estado global redux:", state)
    return {
        isAuthenticated: state.userData.token !== null,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

const StartContainer = connect(mapStateToProps, mapDispatchToProps)(StartScreen)

export default StartContainer