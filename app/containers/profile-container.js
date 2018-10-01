import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ProfileScreen from '../components/screens/profile-screen'
import {logOutAction} from "../actions/logOut-action"

const mapStateToProps = (state, props) => {
    return {
        firstNameAndLastName: state.userData.firstNameAndLastName,
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