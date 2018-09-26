import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileScreen from '../components/screens/profile-screen'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         
    }
    return bindActionCreators(actions, dispatch)
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

export default HomeContainer