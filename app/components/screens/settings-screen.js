/**
 * Settings Screen.
 */
import React from 'react';
import { View, StatusBar, Dimensions, Image, Keyboard, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { loginStyles as styles } from '../../resources/styles/styles'
import { Container, Header, Drawer, Body, List, ListItem, Switch, Title, Icon, Content, Item, Input, Text, Button, Left, Right, Toast, InputGroup } from 'native-base'
import I18n from '../../resources/i18n/i18n'
import SideBar from '../others/custom-sideBar'

const widthscreen = Dimensions.get('window').width

class SettingsScreen extends React.Component {
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
                            <Title>Ajustes</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={{ flex: 1, backgroundColor: '#e5fce8' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginRight: 10 }}>
                                <Icon style={{ fontSize: 40, color: '#d3a01e' }} type='FontAwesome' name='smile-o' />
                            </View>
                            <View style={{ flex: 7 }}>
                                <Text>Reconocimiento facial</Text>
                                <Text note>Activar/Desactivar el reconocimiento facial para el proceso de certificación de asistencia (el profesor docenete será notificado)</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent:'flex-end', alignItems:'flex-end' }}>
                                <Switch value={true} />
                            </View>
                        </View>
                        <View
                            style={{
                                marginVertical: 10,
                                borderBottomColor: '#008279',
                                borderBottomWidth: 1,
                                opacity: 0.5,
                            }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                                <Icon style={{ fontSize: 40, color: '#d3a01e' }} type='FontAwesome' name='home' />
                            </View>
                            <View style={{ flex: 6 }}>
                                <Text>Pantalla inicial</Text>
                                <Text note>Activar/Desactivar el proceso de certificación de asistencia como pantalla inicial de la aplicación</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent:'flex-end', alignItems:'flex-end' }}>
                                <Switch  />
                            </View>
                        </View>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default SettingsScreen
/**
 * <View style={{ }}>
                            <View style={{  marginRight: 10 }}>
                                <Icon style={{fontSize:40, color:'#d3a01e'}} type='FontAwesome' name='home' />
                            </View>
                            <View>
                                <Text>Pantalla inicial</Text>
                                <Text note>Activar/Desactivar el proceso de certificación de asistencia como pantalla inicial de la aplicación</Text>
                            </View>
                            <View>
                                <Switch value={true} />
                            </View>
                        </View>
 */
/**
 * <List>
                            <ListItem avatar>
                                <Left>
                                    <Icon type='FontAwesome' name='smile-o' />
                                </Left>
                                <Body>
                                    <Text>Reconocimiento facial</Text>
                                    <Text note>Activar/Desactivar el reconocimiento facial para el proceso de certificación de asistencia (el profesor docenete será notificado)</Text>
                                </Body>
                                <Right>
                                    <Switch value={true}/>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Icon type='FontAwesome' name="home" />
                                </Left>
                                <Body>
                                    <Text>Pantalla inicial</Text>
                                    <Text note>Activa/Desactivar el proceso de certificación de asistencia como pantalla inicial de la aplicación</Text>
                                </Body>
                                <Right>
                                    <Switch value={false} />
                                </Right>
                            </ListItem>                            
                        </List>
 */