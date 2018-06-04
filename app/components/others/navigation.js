/**
 * 
 */
import { createDrawerNavigator } from 'react-navigation'
import HomeContainer from '../../containers/home-container'
import SettingsContainer from '../../containers/settings-container'

export default createDrawerNavigator({
    Home: {
        screen: HomeContainer
    },
    Settings: {
        screen: SettingsContainer
    }
})