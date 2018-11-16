/**
 * Home Screen
 *
 * Pantalla de principal a la aplicación.
 */
import React from 'react'
import {ImageBackground, StatusBar} from 'react-native'
import {Container, Icon, Content, Text, Button,} from 'native-base'
import {homeStyles as styles, statusBarDarkGreenColor} from '../../resources/styles'
import I18n from '../../resources/i18n'

class HomeScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>
                    <ImageBackground resizeMode={'contain'}
                                     style={styles.imageBackground}
                                     source={require('../../resources/images/logo.png')}/>

                </Content>
            </Container>
        )
    }
}

export default HomeScreen