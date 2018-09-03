import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideMenu from '../components/custom/sideMenu'

const mapStateToProps = (state, props) => {
    return {
        firstNameAndLastName: state.loginData.firstNameAndLastName,
        email: state.loginData.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         
    }
    return bindActionCreators(actions, dispatch)
}

const SideMenuContainer = connect(mapStateToProps, mapDispatchToProps)(SideMenu)

export default SideMenuContainer