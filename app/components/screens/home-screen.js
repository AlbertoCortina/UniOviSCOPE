/**
 * Home Screen.
 */
import React from 'react';
import { View, StatusBar, Image, Keyboard, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { loginStyles as styles } from '../../resources/styles/styles';
import { Container, Header, Drawer, Body, Title, Icon, Content, Item, Input, Text, Button, Left, Right, Toast, InputGroup } from 'native-base';
import I18n from '../../resources/i18n/i18n';
import SideBar from '../others/custom-sideBar'
import SettingsContainer from '../../containers/settings-container';
import HomeContainer from '../../containers/home-container'
import { createDrawerNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
    openDrawer = () => {
        this._drawer._root.open()
    }

    render() {
        return (
            <Drawer panOpenMask={.25} side="left" ref={(ref) => this._drawer = ref} content={<SideBar {...this.props} />} >
                <Container>
                    <Header style={{ paddingTop: StatusBar.currentHeight, height: 64 + StatusBar.currentHeight, backgroundColor: '#008279' }}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>UniOviSCOPE</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e5fce8' }}>
                        <ImageBackground resizeMode={'contain'}
                            style={{ width: 350, height: 350, backgroundColor: 'rgb(229, 252, 232)', opacity: 0.1, position: 'absolute' }}
                            source={require('../../resources/images/logo.png')} />
                        <Button rounded iconLeft style={{
                            marginTop: 15,
                            backgroundColor: '#d3a01e',
                            alignSelf: 'center'
                        }}>
                            <Icon type='FontAwesome' name='check-square-o' />
                            <Text>Certificar presencia</Text>
                        </Button>
                        <Button rounded iconLeft style={{
                            marginTop: 15,
                            backgroundColor: '#d3a01e',
                            alignSelf: 'center'
                        }}>
                            <Icon type='FontAwesome' name='calendar-check-o' />
                            <Text>Revisar asistens</Text>
                        </Button>
                        {
                            console.log(this.state)
                        }
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingsContainer
    }
})