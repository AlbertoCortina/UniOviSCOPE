import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PracticeSessionsScreen from '../screens/practiceSessions-screen'
import getSessionsAction from '../../actions/getSessions-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
        idStudent: state.userData.id,
        practiceSessions: state.sessions.practice
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        getSessions: getSessionsAction
    }
    return bindActionCreators(actions, dispatch)
}

const PracticeSessionsContainer = connect(mapStateToProps, mapDispatchToProps)(PracticeSessionsScreen)

export default PracticeSessionsContainer