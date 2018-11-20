import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import GroupTutorshipSessionsScreen
    from '../screens/groupTutorshipSessions-screen'
import getSessionsAction from '../../actions/getSessions-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
        idStudent: state.userData.id,
        groupTutorshipSessions: state.sessions.group_tutorship
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        getSessions: getSessionsAction
    }
    return bindActionCreators(actions, dispatch)
}

const GroupTutorshipSessionsContainer = connect(mapStateToProps, mapDispatchToProps)(GroupTutorshipSessionsScreen)

export default GroupTutorshipSessionsContainer