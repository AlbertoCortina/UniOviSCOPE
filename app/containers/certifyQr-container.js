import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CertifyQrScreen from '../components/screens/certifyQr-screen'
import verifyQRCodeAction from "../actions/verifyQRCode-action";
import certifyAttendanceAction from "../actions/certifyAttendance-action";

const mapStateToProps = (state, props) => {
    return {
        token: state.userData.token,
        username: state.userData.username,
        certificate: state.attendanceCertificate,
        faceRecognition: state.settings.faceRecognition
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        verifyQRCode: verifyQRCodeAction,
        certifyAttendance: certifyAttendanceAction
    }
    return bindActionCreators(actions, dispatch)
}

const CertifyQrContainer = connect(mapStateToProps, mapDispatchToProps)(CertifyQrScreen)

export default CertifyQrContainer