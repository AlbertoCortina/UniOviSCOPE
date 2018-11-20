import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SeminarSessionsScreen from '../screens/seminarSessions-screen'
import getSessionsAction from '../../actions/getSessions-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
        idStudent: state.userData.id,
        seminarSessions: state.sessions.seminar
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        getSessions: getSessionsAction
    }
    return bindActionCreators(actions, dispatch)
}

const SeminarSessionsContainer = connect(mapStateToProps, mapDispatchToProps)(SeminarSessionsScreen)

export default SeminarSessionsContainer