import React from 'react'
import {ScrollView, Switch, Text, View} from 'react-native'
import {Divider} from 'react-native-elements'
import I18n from '../../resources/i18n'
import {CERTIFY_SCREEN, HOME_SCREEN, OFF, ON} from '../../actions'
import {settingsStyles as styles} from '../../resources/styles'

/**
 * Clase SettingsScreen.
 *
 * Componente para la selección de preferencias del usuario.
 *
 * @author Alberto Cortina Eduarte
 */
class SettingsScreen extends React.Component {

    getFaceRecognitionSwitchValue() {
        if (this.props.faceRecognition === ON) {
            return true
        } else if (this.props.faceRecognition === OFF) {
            return false
        }
    }

    getLandingScreenSwitchValue() {
        if (this.props.landingScreen === HOME_SCREEN) {
            return false
        } else if (this.props.landingScreen === CERTIFY_SCREEN) {
            return true
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text
                            style={styles.title}>{I18n.t('opcion_reconocimiento_facial')}</Text>
                        <Text
                            style={styles.subtitle}>{I18n.t('descripcion_opcion_reconocimiento_facial')}</Text>
                    </View>

                    <View style={styles.switchContainer}>
                        <Switch value={this.getFaceRecognitionSwitchValue()}
                                onValueChange={() => {
                                    this.props.changeFaceRecognitionSetting(this.props.faceRecognition)
                                }}/>
                    </View>
                </View>

                <View style={styles.row}>
                    <Divider style={styles.divider}/>
                </View>

                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text
                            style={styles.title}>{I18n.t('opcion_pantalla_inicial')}</Text>
                        <Text
                            style={styles.subtitle}>{I18n.t('descripcion_opcion_pantalla_inicial')}</Text>
                    </View>

                    <View style={styles.switchContainer}>
                        <Switch value={this.getLandingScreenSwitchValue()}
                                onValueChange={() => {
                                    this.props.changeLandingScreenSetting(this.props.landingScreen)
                                }}/>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

export default SettingsScreen