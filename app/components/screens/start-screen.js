/**
 * Start Screen
 * 
 * Pantalla de inicio donde se decide que pantalla cargar.
 */
import React from 'react'
import { View, Text } from 'react-native'
import LoginContainer from '../../containers/login-container'

class StartScreen extends React.Component {

    render() {
        if (!this.props.isAuthenticated) {
            return <LoginContainer />
        } else {
            //TODO Queda poner aqui <DrawerContainer/>
            return (<View><Text>AUTENTICADO</Text></View>)
        }
    }
}

export default StartScreen