import React from 'react'
import {createStackNavigator, createTabNavigator, TabBarTop} from 'react-navigation'
import {createMaterialBottomTabNavigator,} from 'react-navigation-material-bottom-tabs'
import {Alert, Platform, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'
import {APP_AUTHOR, APP_NAME, APP_VERSION} from '../../util'
import {navigationStyles as styles, orange, white} from '../../resources/styles'
import I18n from '../../resources/i18n'
import HomeContainer from '../containers/home-container'
import ProfileContainer from '../containers/profile-container'
import SettingsContainer from '../containers/settings-container'
import CheckAttendanceContainer from '../containers/checkAttendance-container'
import CertifyQrContainer from '../containers/certifyQr-container'
import CertifyFrContainer from '../containers/certifyFr-container'
import TheorySessionsContainer from '../containers/theorySessions-container'
import PracticeSessionsContainer from '../containers/practiceSessions-container'
import SeminarSessionsContainer from '../containers/seminarSessions-container'
import GroupTutorshipSessionsContainer
    from "../containers/groupTutorshipSessions-container";

/**
 * Método para mostrar la información de la aplicación.
 */
function showAbout() {
    Alert.alert(
        I18n.t('acerca_de') + ' ' + APP_NAME,
        I18n.t('version') + ' ' + APP_VERSION + '\n' +
        I18n.t('universidad_oviedo') + '\n' +
        I18n.t('autor') + ' ' + APP_AUTHOR,
        [
            {text: I18n.t('toast_aceptar')},
        ],
        {
            cancelable: false
        }
    )
}

/**
 * Componente personalizado para cabeceras en las que hay dos líneas.
 *
 * @param title Título de la cabecera.
 * @param subtitle Subtítulo de la cabecera.
 * @constructor
 */
const CustomHeader = ({title, subtitle}) => (
    <View
        style={styles.customHeaderContainer}>
        <Text style={styles.customHeaderTitle}>{title}</Text>
        <Text style={styles.customHeaderSubtitle}>{subtitle}</Text>
    </View>
)

/**
 * Componente personalizado para la parte izquierda de la cabecera en
 * CertifyFr Screen.
 *
 * @constructor
 */
const CustomHeaderLeft = ({navigation}) => Platform.select({
    ios:
        <TouchableOpacity transparent
                          style={styles.customHeaderLeft}
                          style={{marginTop: -13, padding:20}}
                          onPress={() => navigation.goBack()}>
            <Icon type='ionicon' name='ios-arrow-back' color={white}/>
        </TouchableOpacity>
    ,
    android:
        <TouchableOpacity transparent
                          style={styles.customHeaderLeft}
                          onPress={() => navigation.goBack()}>
            <Icon type='ionicon' name='md-arrow-back' color={white}/>
        </TouchableOpacity>
})


/**
 * Componente personalizado para la parte derecha de la cabecera en
 * Settings Screen.
 *
 * @constructor
 */
const CustomHeaderRight = Platform.select({
    ios: () => (
        <TouchableOpacity transparent
                          style={styles.customHeaderRight}
                          style={{marginTop: -22, padding:20}}
                          onPress={() => {
                              showAbout()
                          }}>
            <Icon type='ionicon' name='ios-help' color={white} size={40}/>
        </TouchableOpacity>
    ),
    android: () => (
        <TouchableOpacity transparent
                          style={styles.customHeaderRight}
                          onPress={() => {
                              showAbout()
                          }}>
            <Icon type='ionicon' name='md-help' color={white} size={25}/>
        </TouchableOpacity>
    )
})

/**
 * Pila de navegación para Home Screen.
 */
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('inicio'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle
            })
        }
    }
)

/**
 * Pila de navegación para CertifyQR y CertifyFR.
 */
const CertifyAttendanceStack = createStackNavigator(
    {
        CertifyQR: {
            screen: CertifyQrContainer,
            navigationOptions: ({navigation}) => ({
                headerTitle: <CustomHeader
                    title={I18n.t('certificar_presencia')}
                    subtitle={I18n.t('certificar_presencia_qr')}/>,
                headerStyle: styles.headerStyle
            })
        },
        CertifyFR: {
            screen: CertifyFrContainer,
            navigationOptions: ({navigation}) => ({
                headerTitle: <CustomHeader
                    title={I18n.t('certificar_presencia')}
                    subtitle={I18n.t('certificar_presencia_fr')}/>,
                headerStyle: styles.headerStyle,
                headerLeft: <CustomHeaderLeft
                    navigation={navigation}/>
            })
        }
    },
    {
        initialRouteName: 'CertifyQR'
    }
)

/**
 * Pestañas de navegación para Check Attendance Detail.
 */
const CheckAttendanceDetailTabNavigator = createTabNavigator(
    {
        Theory: {
            screen: TheorySessionsContainer,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('teoria'),
            })
        },
        Practice: {
            screen: PracticeSessionsContainer,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('practica'),
            })
        },
        Seminar: {
            screen: SeminarSessionsContainer,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('seminario'),
            })
        },
        GropTutorship: {
            screen: GroupTutorshipSessionsContainer,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: I18n.t('tutoria'),
            })
        }
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            labelStyle: styles.labelStyle,
            tabStyle: styles.tabStyle,
            style: styles.tabBarContainer,
            indicatorStyle: styles.tabIndicatorStyle
        }
    }
)

/**
 * Pila de navegación para Check Attendance Screen.
 */
const CheckAttendanceStack = createStackNavigator(
    {
        CheckAttendance: {
            screen: CheckAttendanceContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('revisar_asistencias'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle
            })
        },
        CheckAttendanceDetail: {
            screen: CheckAttendanceDetailTabNavigator,
            navigationOptions: ({navigation}) => ({
                title: navigation.getParam('subject'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerLeft: <CustomHeaderLeft navigation={navigation}/>
            })
        }
    }
)

/**
 * Pila de navegación para Settings Screen.
 */
const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: SettingsContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('ajustes'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerRight: <CustomHeaderRight/>
            })
        }
    }
)

/**
 * Pila de navegación para Profile Screen
 */
const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('perfil'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle
            })
        }
    }
)

/**
 * Clase BottomTabNavigator.
 *
 * Componente personalizado para la navegación de la aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
class BottomTabNavigator extends React.Component {

    constructor() {
        super()
        this.navigator = null;
    }

    getNavigator() {
        if (this.navigator == null) {
            this.navigator = createMaterialBottomTabNavigator(
                {
                    Home: {
                        screen: HomeStack,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: I18n.t('inicio'),
                            tabBarIcon: ({tintColor}) => (
                                <Icon type='ionicon'
                                      name={
                                          Platform.OS === 'ios' ? 'ios-home' : 'md-home'
                                      }
                                      color={tintColor}
                                      size={25}/>
                            )
                        })
                    },
                    CertifyAttendance: {
                        screen: CertifyAttendanceStack,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: I18n.t('certificar_presencia_short'),
                            tabBarIcon: ({tintColor}) => (
                                <Icon type='ionicon'
                                      name={
                                          Platform.OS === 'ios' ? 'ios-checkbox-outline' : 'md-checkbox-outline'
                                      }
                                      color={tintColor}
                                      size={25}/>
                            )
                        })
                    },
                    CheckAttendance: {
                        screen: CheckAttendanceStack,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: I18n.t('revisar_asistencias_short'),
                            tabBarIcon: ({tintColor}) => (
                                <Icon type='ionicon'
                                      name={
                                          Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'
                                      }
                                      color={tintColor}
                                      size={25}/>
                            )
                        })
                    },
                    Settings: {
                        screen: SettingsStack,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: I18n.t('ajustes'),
                            tabBarIcon: ({tintColor}) => (
                                <Icon type='ionicon'
                                      name={
                                          Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'
                                      }
                                      color={tintColor}
                                      size={25}/>
                            )
                        })
                    },
                    Profile: {
                        screen: ProfileStack,
                        navigationOptions: ({navigation}) => ({
                            tabBarLabel: I18n.t('perfil'),
                            tabBarIcon: ({tintColor}) => (
                                <Icon type='ionicon'
                                      name={
                                          Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'
                                      }
                                      color={tintColor}
                                      size={25}/>
                            )
                        })
                    }
                },
                {
                    activeColor: orange,
                    inactiveColor: white,
                    barStyle: styles.barStyle,
                    initialRouteName: this.props.landingScreen,
                    order: ['CertifyAttendance', 'CheckAttendance', 'Home', 'Profile', 'Settings'],
                    backBehavior: 'none'
                }
            )
        }
        return this.navigator
    }

    render() {
        const Navigator = this.getNavigator()
        return <Navigator/>
    }

}

export default BottomTabNavigator