/**
 * Settings Container
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SettingsScreen from '../components/screens/settings-screen'

class SettingsContainer extends React.Component {
    render() {
        return (
            < SettingsScreen {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)