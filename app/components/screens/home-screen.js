/**
 * Home Screen
 * 
 * Pantalla de principal a la aplicación.
 */
import React from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { Container, Icon, Content, Text, Button, } from 'native-base'
import { homeStyles as styles, statusBarColor } from '../../resources/styles'
import I18n from '../../resources/i18n'

class HomeScreen extends React.Component {

    render() {
        return (
            <Container>
                <StatusBar translucent animated backgroundColor={statusBarColor} />
                <Content padder contentContainerStyle={styles.content}>
                    <ImageBackground resizeMode={'contain'}
                        style={styles.imageBackground}
                        source={require('../../resources/images/logo.png')} />
                    <Button rounded iconLeft style={styles.button} >
                        <Icon style={styles.buttonIcon} type='FontAwesome' name='check-square-o' />
                        <Text style={styles.buttonText} >{I18n.t('certificar_presencia')}</Text>
                    </Button>
                    <Button rounded iconLeft style={styles.button}>
                        <Icon style={styles.buttonIcon} type='FontAwesome' name='calendar-check-o' />
                        <Text style={styles.buttonText} >{I18n.t('revisar_asistencias')}</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen