import React from 'react'
import { Alert, View, Image, ImageBackground, StatusBar } from 'react-native'
import { Container, Icon, Content, Text, Button } from 'native-base'
import { drawerStyles as styles, darkGreenBar } from '../../resources/styles'
import { APP_NAME, APP_VERSION, APP_AUTHOR } from '../../util'
import Separator from './custom-separator'
import I18n from 'react-native-i18n'

class SideBar extends React.Component {

    getInitials(firstNameAndLastName) {
        var words = firstNameAndLastName.split(' ')
        var initials = '';
        for (i = 0; i < words.length; i++) {
            if (words[i].charAt(0) == words[i].charAt(0).toUpperCase()) {
                initials += words[i].charAt(0)
            }
        }
        return initials
    }

    showAbout() {
        Alert.alert(
            I18n.t('acerca_de') + ' ' + APP_NAME,
            I18n.t('version') + ' ' + APP_VERSION + '\n' + I18n.t('universidad_oviedo') + '\n' + I18n.t('autor') + ' ' + APP_AUTHOR,
            [
                { text: I18n.t('toast_aceptar') },
            ],
            {
                cancelable: false
            }
        )
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)"
                        animated />
                    <View style={styles.infoContainer}>
                        <View style={styles.thumbnailContainer}>
                            <Text style={styles.thumbnail}>{this.getInitials(this.props.firstNameAndLastName)}</Text>
                        </View>
                        <View>
                            <Text style={styles.nameAndSurnameText}>{this.props.firstNameAndLastName}</Text>
                            <Text style={styles.emailText}>{this.props.email}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} iconLeft transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='home' />
                            <Text style={styles.buttonText}>{I18n.t('inicio')}</Text>
                        </Button>
                        <Separator />
                        <Button style={styles.button} iconLeft transparent onPress={() => this.props.navigation.navigate('Certify')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='check-square-o' />
                            <Text style={styles.buttonText}>{I18n.t('certificar_presencia')}</Text>
                        </Button>
                        <Button style={styles.button} iconLeft transparent onPress={() => this.props.navigation.navigate('Check')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='calendar-check-o' />
                            <Text style={styles.buttonText}>{I18n.t('revisar_asistencias')}</Text>
                        </Button>
                        <Separator />
                        <Button style={styles.button} iconLeft transparent onPress={() => this.props.navigation.navigate('Settings')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='gear' />
                            <Text style={styles.buttonText}>{I18n.t('ajustes')}</Text>
                        </Button>
                        <Button style={styles.button} iconLeft transparent onPress={() => this.showAbout()}>
                            <Icon color={darkGreenBar} style={styles.buttonIcon} type='FontAwesome' name='question' />
                            <Text style={styles.buttonText}>{I18n.t('acerca_de')}</Text>
                        </Button>
                    </View>
                </Content >
            </Container>
        )
    }
}

export default SideBar