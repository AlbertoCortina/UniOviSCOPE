/**
 * Start Screen
 * 
 * Pantalla de inicio donde se decide que pantalla cargar.
 */
import React from 'react'
import LoginContainer from '../../containers/login-container'
import BottomTabNavigator from '../navigation'

class StartScreen extends React.Component {

    render() {
        if (!this.props.isAuthenticated) {
            return <LoginContainer />
        } else {
            return <BottomTabNavigator />
        }
    }
}

export default StartScreen