import React from 'react'
import {ImageBackground, Text} from 'react-native'
import {Container, Content,} from 'native-base'
import {homeStyles as styles} from '../../resources/styles'
import I18n from '../../resources/i18n'

/**
 * Clase HomeScreen.
 *
 * Componente para visualizar la bienvenida a la aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
class HomeScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder
                         contentContainerStyle={styles.content}>
                    <ImageBackground resizeMode={'contain'}
                                     style={styles.imageBackground}
                                     source={require('../../resources/images/logo.png')}/>
                    <Text style={styles.title}>{I18n.t('hola')}{this.props.name}!</Text>
                    <Text style={styles.subtitle}>{I18n.t('bienvenido')}</Text>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen