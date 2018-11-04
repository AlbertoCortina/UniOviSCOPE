import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import BottomTabNavigator from '../components/navigation'

const mapStateToProps = (state, props) => {
    return {
       landingScreen: state.settings.landingScreen,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

const BottomTabNavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigator)

export default BottomTabNavigatorContainer