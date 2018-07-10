import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplashScreen from '../components/screens/splash-screen'

const mapStateToProps = (state, props) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         
    }
    return bindActionCreators(actions, dispatch)
}

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashScreen)

export default SplashContainer