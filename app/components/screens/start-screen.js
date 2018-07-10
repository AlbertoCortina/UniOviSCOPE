import React from 'react'
import LoginContainer from '../../containers/login-container'
import { Drawer } from '../navigators'
import SplashScreen from 'react-native-splash-screen'

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.checkAuthentication()
        SplashScreen.hide()
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <LoginContainer />
        } else if (this.props.isAuthenticated) {
            return <Drawer />
        }
    }
}

export default StartScreen