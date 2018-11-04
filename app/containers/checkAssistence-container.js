import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CheckAssistenceScreen from '../components/screens/checkAssistence-screen'
import getSubjectsAction from '../actions/getSubjects-action'
import getSessionsAction from "../actions/getSessions-action";

const mapStateToProps = (state, props) => {
    return {
        token: state.userData.token,
        idStudent: state.userData.id,
        subjects: state.subjects,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        getSubjects: getSubjectsAction,
    }
    return bindActionCreators(actions, dispatch)
}

const CheckAssistenceContainer = connect(mapStateToProps, mapDispatchToProps)(CheckAssistenceScreen)

export default CheckAssistenceContainer