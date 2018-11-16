import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeScreen from '../screens/home-screen'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
         
    }
    return bindActionCreators(actions, dispatch)
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeContainer