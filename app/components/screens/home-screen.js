import React from 'react'
import {ImageBackground} from 'react-native'
import {Container, Content,} from 'native-base'
import {homeStyles as styles} from '../../resources/styles'

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

                </Content>
            </Container>
        )
    }
}

export default HomeScreen