import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CheckAttendanceScreen from '../screens/checkAttendance-screen'
import getSubjectsAction from '../../actions/getSubjects-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
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

const CheckAttendanceContainer = connect(mapStateToProps, mapDispatchToProps)(CheckAttendanceScreen)

export default CheckAttendanceContainer