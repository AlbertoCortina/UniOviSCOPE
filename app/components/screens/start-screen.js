import React from 'react'
import LoginContainer from '../../containers/login-container'
import BottomTabNavigatorContainer from '../../containers/bottomTabNavigator-container'

/**
 * Clase StartScreen.
 *
 * Componente que decide en que pantalla iniciar la aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
class StartScreen extends React.Component {

    render() {
        if (!this.props.isAuthenticated) {
            return <LoginContainer/>
        } else {
            return <BottomTabNavigatorContainer/>
        }
    }

}

export default StartScreen