/**
 * Custom Loading.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, Image, StatusBar,ImageBackground, Animated, Dimensions } from 'react-native';
import { Container, Header, Drawer, Thumbnail, Body, Title, Subtitle, Icon, Content, Item, Input, Text, Button, Left, Right, Toast, InputGroup } from 'native-base';

const width = Dimensions.get('window').width; //full width

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#e5fce8' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#d3a01e', height: 200, paddingTop: StatusBar.currentHeight, paddingHorizontal:10, paddingBottom: 10}}>
                        <View style={{
                            flexGrow:1,
                            flex:1,
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                width: 80,
                                height: 80,
                                lineHeight: 80,
                                textAlign: 'center',
                                color: 'white',
                                borderRadius: 40,
                                backgroundColor: 'grey'
                            }}>ACE</Text>
                        </View>
                        <View>
                            <Text style={{ alignContent: 'flex-end', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Alberto Cortina Eduarte</Text>
                            <Text style={{ color: 'white', fontSize: 14 }}>UO245930@uniovi.es</Text>
                        </View>
                    </View>
                    <View>                        
                        <Button iconLeft transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon style={{ color: 'black', fontSize: 24 }} type='FontAwesome' name='home' />
                            <Text style={{ width: width, color: 'black' }}>Inicio</Text>
                        </Button>
                        <View
                            style={{
                                borderBottomColor: '#008279',
                                borderBottomWidth: 1,
                                opacity: 0.5,
                            }} />
                        <Button iconLeft transparent>
                            <Icon style={{ color: 'black', fontSize: 24 }} type='FontAwesome' name='check-square-o' />
                            <Text style={{ width: width, color: 'black' }}>Certificar presencia</Text>
                        </Button>
                        <Button iconLeft transparent>
                            <Icon style={{ color: 'black', fontSize: 24 }} type='FontAwesome' name='calendar-check-o' />
                            <Text style={{ width: width, color: 'black' }}>Revisar asistencias</Text>
                        </Button>
                        <View
                            style={{
                                borderBottomColor: '#008279',
                                borderBottomWidth: 1,
                                opacity: 0.5
                            }} />
                        <Button iconLeft transparent onPress={() => this.props.navigation.navigate('Settings')}>
                            <Icon style={{ color: 'black', fontSize: 24 }} type='FontAwesome' name='gear' />
                            <Text style={{ width: width, color: 'black' }}>Ajustes</Text>
                        </Button>
                        <Button iconLeft transparent>
                            <Icon style={{ color: 'black', fontSize: 24 }} type='FontAwesome' name='question' />
                            <Text style={{ width: width, color: 'black' }}>Acerca de</Text>
                        </Button>
                    </View>
                </Content >
            </Container>
        );
    }}