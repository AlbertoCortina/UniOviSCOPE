import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CertifyFrScreen from '../components/screens/certifyFr-screen'

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    const actions = {}
    return bindActionCreators(actions, dispatch)
}

const CertifyFrContainer = connect(mapStateToProps, mapDispatchToProps)(CertifyFrScreen)

export default CertifyFrContainer