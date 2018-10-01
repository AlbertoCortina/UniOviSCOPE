/**
 * Settings Screen
 * 
 * Pantalla de ajustes a la aplicación.
 */
import React from 'react'
import { Container, Content } from 'native-base'
import { settingsStyles as styles } from '../../resources/styles'

class SettingsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>

                </Content>
            </Container>
        )
    }
}

export default SettingsScreen