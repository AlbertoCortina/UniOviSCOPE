import React from 'react'
import { View } from 'react-native'
import { Container, Header, Drawer, Body, Title, Subtitle, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles } from '../../resources/styles'
import I18n from '../../resources/i18n'
import { StackActions, NavigationActions } from 'react-navigation'
import SideBar from '../custom/custom-sideBar'

class CertifyRFScreen extends React.Component {

    resetStack() {
        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'CertifyQR' })]
            })
        );
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon type='MaterialIcons' name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{I18n.t('certificar_presencia')}</Title>
                        <Subtitle>prueba rf</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <Content padder contentContainerStyle={styles.content}>
                    <Button onPress={() => this.resetStack()}>
                        <Text>Home</Text>
                    </Button>
                </Content>
            </Container >
        )
    }
}

export default CertifyRFScreen