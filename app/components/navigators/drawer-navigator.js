import { createDrawerNavigator } from 'react-navigation'
import HomeContainer from '../../containers/home-container'
import SettingsContainer from '../../containers/settings-container'
import CertifyStackNavigator from '../navigators/certify-stack-navigator'

export default createDrawerNavigator({
    Home: {
        screen: HomeContainer,
    },
    Settings: {
        screen: SettingsContainer,
    },
    Certify: {
        screen: CertifyStackNavigator,
    },
})