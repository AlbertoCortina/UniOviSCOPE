import { DrawerNavigator, StackNavigator } from 'react-navigation'

import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeContainer from '../../containers/home-container'
import SettingsContainer from '../../containers/settings-container'
import CertifyQRContainer from '../../containers/certify-qr-container'
import CertifyRFContainer from '../../containers/certify-rf-container'
import CheckSubjectsContainer from '../../containers/check-subjects-container';

export const Drawer = DrawerNavigator(
    {
        Home: {
            screen: HomeContainer,
        },
        Certify: {
            screen: StackNavigator(
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
                }),
        },
    }
)



/* export default createDrawerNavigator(
    {
        Home: {
            screen: HomeContainer,
        },
        Certify: {
            screen: createStackNavigator(
                {
                    CertifyQR: {
                        screen: CertifyQRContainer,
                    },
                    CertifyRF: {
                        screen: CertifyRFContainer,
                    },
                },
                {
                    headerMode: 'none',
                    navigationOptions: {
                        header: {
                            visible: false,
                        },
                    },
                },
            ),
        },
        Check: {
            screen: createStackNavigator(
                {
                    CheckSubjects: {
                        screen: CheckSubjectsContainer,
                    },
                },
                {
                    headerMode: 'none',
                    navigationOptions: {
                        header: {
                            visible: false,
                        },
                    },
                },
            ),
        },
        Settings: {
            screen: SettingsContainer,
        },
    }
) */