import React from 'react'
import SplashContainer from '../../containers/splash-container'
import LoginContainer from '../../containers/login-container'
import DrawerNavigator from '../custom/drawer-navigator'

class StartScreen extends React.Component {
    componentDidMount() {
        this.props.checkAuthentication()
    }

    render() {
        if (this.props.isLoadingApp && this.props.isSplashScreen) {
            return <SplashContainer />
        } else if (!this.props.isAuthenticated) {
            return <LoginContainer />
        } else if(this.props.isAuthenticated) {
            return <DrawerNavigator/>
        }
    }
}

export default StartScreen