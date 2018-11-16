import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
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
import CertifyFrContainer from "../containers/certifyFr-container"

/**
 * Método para mostrar la información de la aplicación.
 */
function showAbout() {
    Alert.alert(
        I18n.t('acerca_de') + ' ' + APP_NAME,
        I18n.t('version') + ' ' + APP_VERSION + '\n' + I18n.t('universidad_oviedo') + '\n' + I18n.t('autor') + ' ' + APP_AUTHOR,
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
 * Componente personalizado para la parte izquierda de la cabecera.
 *
 * @constructor
 */
const CustomHeaderLeft = Platform.select({
    ios: () => (
        <TouchableOpacity transparent
                          style={styles.customHeaderLeft}
                          onPress={() => navigation.goBack()}>
            <Icon type='ionicon' name='ios-arrow-back' color={white}/>
        </TouchableOpacity>
    ),
    android: () => {
        <TouchableOpacity transparent
                          style={styles.customHeaderLeft}
                          onPress={() => navigation.goBack()}>
            <Icon type='ionicon' name='md-arrow-back' color={white}/>
        </TouchableOpacity>
    }
})

/**
 * Componente personalizado para la parte derecha de la cabecera.
 *
 * @constructor
 */
const CustomHeaderRight = Platform.select({
    ios: () => (
        <TouchableOpacity transparent
                          style={styles.customHeaderRight}
                          onPress={() => {
                              showAbout()
                          }}>
            <Icon type='ionicon' name='ios-help' color={white} size={25}/>
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
                    subtitle={I18n.t('certificar_presencia_qr')}/>,
                headerStyle: styles.headerStyle,
                headerLeft: <CustomHeaderLeft/>
            })
        }
    },
    {
        initialRouteName: 'CertifyQR'
    }
)

const CheckAttendanceStack = createStackNavigator(
    {
        CheckAttendance: {
            screen: CheckAttendanceContainer,
            navigationOptions: ({navigation}) => ({
                title: I18n.t('revisar_asistencias'),
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle
            })
        }
    }
)

/**
 * Pila de navegación para Settings Screen
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