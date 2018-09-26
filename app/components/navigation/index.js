import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { darkGreen, headerHeight, marginHeader, orange, white } from '../../resources/styles'
import I18n from '../../resources/i18n'
import HomeContainer from '../../containers/home-container'
import ProfileContainer from '../../containers/profile-container'

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('inicio'),
                headerStyle: {
                    backgroundColor: darkGreen,
                    height: headerHeight,
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'normal',
                    color: 'white',
                    marginTop: marginHeader,
                },
            }),
        },
    }
)

const CertifyPresenceStack = createStackNavigator(
    {
        CertifyPresence: {
            screen: HomeContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('certificar_presencia'),
                headerStyle: {
                    backgroundColor: darkGreen,
                    height: headerHeight,
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'normal',
                    color: 'white',
                    marginTop: marginHeader,
                },
            }),
        },
    }
)

const CheckAssistenceStack = createStackNavigator(
    {
        CheckAssistence: {
            screen: HomeContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('revisar_asistencias'),
                headerStyle: {
                    backgroundColor: darkGreen,
                    height: headerHeight,
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'normal',
                    color: 'white',
                    marginTop: marginHeader,
                },
            }),
        },
    }
)

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: HomeContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('ajustes'),
                headerStyle: {
                    backgroundColor: darkGreen,
                    height: headerHeight,
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'normal',
                    color: 'white',
                    marginTop: marginHeader,
                },
            }),
        },
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('perfil'),
                headerStyle: {
                    backgroundColor: darkGreen,
                    height: headerHeight,
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'normal',
                    color: 'white',
                    marginTop: marginHeader,
                },
            }),
        },
    }
)

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('inicio'),
                tabBarIcon: ({ tintColor }) => (
                    <Icon type='ionicon' name='md-home' color={tintColor} size={22} />
                ),
            }),
        },
        CertifyPresence: {
            screen: CertifyPresenceStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('certificar_presencia_short'),
                tabBarIcon: ({ tintColor }) => (
                    <Icon type='ionicon' name='md-checkbox-outline' color={tintColor} size={22} />
                ),
            }),
        },
        CheckAssistence: {
            screen: CheckAssistenceStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('revisar_asistencias_short'),
                tabBarIcon: ({ tintColor }) => (
                    <Icon type='ionicon' name='md-calendar' color={tintColor} size={22} />
                ),
            }),
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('ajustes'),
                tabBarIcon: ({ tintColor }) => (
                    <Icon type='ionicon' name='md-settings' color={tintColor} size={22} />
                ),
            }),
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('perfil'),
                tabBarIcon: ({ tintColor }) => (
                    <Icon type='ionicon' name='md-contact' color={tintColor} size={22} />
                ),
            }),
        },
    },
    {
        initialRouteName: 'Home',
        order: ['CertifyPresence', 'CheckAssistence', 'Home', 'Settings', 'Profile'],
        tabBarOptions: {
            activeTintColor: orange,
            inactiveTintColor: white,
            labelStyle: {
                fontFamily: 'Montserrat',
                fontSize: 12,
            },
            style: {
                backgroundColor: darkGreen,
            },
        },
    },
)