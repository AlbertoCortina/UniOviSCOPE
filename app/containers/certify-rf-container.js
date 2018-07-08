import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CertifyRFScreen from '../components/screens/certify-rf-screen'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

const CertifyRFContainer = connect(mapStateToProps, mapDispatchToProps)(CertifyRFScreen)

export default CertifyRFContainer