import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import LoginContainer from '../../containers/login-container'
import { Drawer } from '../navigators'

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.checkAuthentication()
        setTimeout(() => {
            SplashScreen.hide()
        }, 500)
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