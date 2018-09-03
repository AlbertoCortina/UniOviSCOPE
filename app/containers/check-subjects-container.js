import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CheckSubjectsScreen from '../components/screens/check-subjects-screen'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

const CheckSubjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CheckSubjectsScreen)

export default CheckSubjectsContainer