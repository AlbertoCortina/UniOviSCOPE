/**
 * Profile Screen
 * 
 * Pantalla de perfil a la aplicación.
 */
import React from 'react'
import { Container, Content } from 'native-base'
import { profileStyles as styles } from '../../resources/styles'

class ProfileScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>

                </Content>
            </Container>
        )
    }
}

export default ProfileScreen