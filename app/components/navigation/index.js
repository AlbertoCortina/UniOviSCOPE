import { DrawerNavigator, StackNavigator } from 'react-navigation'

import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeContainer from '../../containers/home-container'
import SettingsContainer from '../../containers/settings-container'
import CertifyQRContainer from '../../containers/certify-qr-container'
import CertifyRFContainer from '../../containers/certify-rf-container'
import CheckSubjectsContainer from '../../containers/check-subjects-container'
import SideMenuContainer from '../../containers/sideMenu-container'

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeContainer,
        }
    }
)

const CertifyStack = createStackNavigator(
    {
        CertifyQR: {
            screen: CertifyQRContainer,
        },
        CertifyRF: {
            screen: CertifyRFContainer,
        },
    },
    {
        initialRouteName: 'CertifyQR'
    }
)

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: SettingsContainer,
        }
    }
)

export default createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        Certify: {
            screen: CertifyStack,
        },
        Settings: {
            screen: SettingsStack,
        },
    },
    {
        contentComponent: SideMenuContainer,
        /*  drawerWidth: 300 */
    }
)