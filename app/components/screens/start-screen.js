import React from 'react'
import LoginContainer from '../containers/login-container'
import BottomTabNavigatorContainer
    from '../containers/bottomTabNavigator-container'
import {StatusBar, View} from 'react-native'
import ActivityIndicator from '../custom/custom-activityIndicator'
import Notification from '../containers/notification-container'
import {
    startStyles as styles,
    statusBarDarkGreenColor,
    statusBarLightGreenColor
} from '../../resources/styles'

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
            return (
                <View style={styles.container}>
                    <StatusBar opaque
                               animated
                               backgroundColor={statusBarLightGreenColor}/>
                    <LoginContainer/>
                    <ActivityIndicator isLoading={this.props.isLoading}
                                       size={80}/>
                    <Notification/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar opaque
                               animated
                               backgroundColor={statusBarDarkGreenColor}/>
                    <BottomTabNavigatorContainer/>
                    <ActivityIndicator isLoading={this.props.isLoading}
                                       size={80}/>
                    <Notification/>
                </View>
            )
        }
    }

}

export default StartScreen