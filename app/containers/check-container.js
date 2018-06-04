/**
 * Check Container
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CheckContainer extends React.Component {
    render() {
        return (
            < HomeScreen />
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckContainer)