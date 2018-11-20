import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CertifyFrScreen from '../screens/certifyFr-screen'
import certifyAttendanceAction from '../../actions/certifyAttendance-action'

const mapStateToProps = (state, props) => {
    return {
        bearerToken: state.userData.bearerToken,
        username: state.userData.username,
        certificate: state.attendanceCertificate,
        faceRecognition: state.settings.faceRecognition
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        certifyAttendance: certifyAttendanceAction
    }
    return bindActionCreators(actions, dispatch)
}

const CertifyFrContainer = connect(mapStateToProps, mapDispatchToProps)(CertifyFrScreen)

export default CertifyFrContainer