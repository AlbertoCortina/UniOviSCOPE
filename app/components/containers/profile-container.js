import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ProfileScreen from '../screens/profile-screen'
import logOutAction from "../../actions/logOut-action"

const mapStateToProps = (state, props) => {
    return {
        firstnameAndLastname: state.userData.firstnameAndLastname,
        email: state.userData.email,
        dni: state.userData.dni,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        logOut: logOutAction,
    }
    return bindActionCreators(actions, dispatch)
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

export default ProfileContainer