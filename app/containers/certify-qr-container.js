import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CertifyQRScreen from '../components/screens/certify-qr-screen'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

const CertifyQRContainer = connect(mapStateToProps, mapDispatchToProps)(CertifyQRScreen)

export default CertifyQRContainer