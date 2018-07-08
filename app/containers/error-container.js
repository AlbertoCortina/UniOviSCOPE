import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Error from '../components/custom/custom-error'
import { deleteErrorAction } from '../actions/deleteError-action'

const mapStateToProps = (state, props) => {
    return {
       errors: state.errors,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        deleteError: deleteErrorAction,
    }
    return bindActionCreators(actions, dispatch)
}

const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(Error)

export default ErrorContainer