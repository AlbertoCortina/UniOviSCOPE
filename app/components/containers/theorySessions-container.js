import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TheorySessionsScreen from '../screens/theorySessions-screen'
import getSessionsAction from '../../actions/getSessions-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
        idStudent: state.userData.id,
        theorySessions: state.sessions.theory
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        getSessions: getSessionsAction
    }
    return bindActionCreators(actions, dispatch)
}

const TheorySessionsContainer = connect(mapStateToProps, mapDispatchToProps)(TheorySessionsScreen)

export default TheorySessionsContainer