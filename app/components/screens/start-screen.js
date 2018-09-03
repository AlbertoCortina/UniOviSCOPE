import React from 'react'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import LoginContainer from '../../containers/login-container'
import DrawerNavigator from '../navigation'

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.checkAuthentication()
        if (!this.props.isLoading) {
            SplashScreen.hide()
        }
    }

    render() {
        if (this.props.isAuthenticationChecked) {
            if (!this.props.isAuthenticated) {
                return <LoginContainer />
            } else if (this.props.isAuthenticated) {
                return <DrawerNavigator />
            }
        }
        else {
            return <View/>
        }
    }
}

export default StartScreen