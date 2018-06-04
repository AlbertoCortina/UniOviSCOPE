/**
 * Home Container
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeScreen from '../components/screens/home-screen'

class HomeContainer extends React.Component {
    render() {
        return (
            < HomeScreen {...this.props} />
        )
    }
}

/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
function mapStateToProps(state, props) {
    return {
       
    }
}

/**
 * 
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    const actions = {

    }
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)