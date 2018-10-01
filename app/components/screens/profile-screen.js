/**
 * Profile Screen
 *
 * Pantalla de perfil a la aplicación.
 */
import React from 'react'
import {View, ScrollView} from 'react-native'
import {Container, Content, Form, Item, Input, Label, Text, Button, TouchableWithoutFeedback} from 'native-base';
import {Avatar} from 'react-native-elements'
import {profileStyles as styles} from '../../resources/styles'
import I18n from "../../resources/i18n";

class ProfileScreen extends React.Component {

    render() {
        return (
            <TouchableWithoutFeedback>
                <Container>

                    <Content padder contentContainerStyle={styles.content}>
                        <View>
                            <Avatar
                                xlarge
                                rounded
                                icon={{type: 'ionicon', name: 'md-person'}}
                                containerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}
                            />
                            <Form>
                                <Item stackedLabel style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    marginTop: 10,
                                }}>
                                    <Label style={{fontFamily: 'Montserrat', color: 'black', fontWeight: 'bold'}}>Nombre
                                        y
                                        apellidos</Label>
                                    <Input style={{fontFamily: 'Montserrat', opacity: 0.5}}
                                           value={'Alberto Cortina Eduarte'}
                                           disabled={true}/>
                                </Item>
                                <Item stackedLabel style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    marginTop: 10,
                                }}>
                                    <Label
                                        style={{
                                            fontFamily: 'Montserrat',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>Email</Label>
                                    <Input style={{fontFamily: 'Montserrat', opacity: 0.5}}
                                           value={'UO24503@uniovi.es'}
                                           disabled={true}/>
                                </Item>
                                <Item stackedLabel style={{
                                    marginLeft: 15,
                                    marginRight: 15,
                                    marginTop: 10,
                                }}>
                                    <Label
                                        style={{
                                            fontFamily: 'Montserrat',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}>DNI</Label>
                                    <Input style={{fontFamily: 'Montserrat', opacity: 0.5}} value={'71682885G'}
                                           disabled={true}/>
                                </Item>
                            </Form>

                        </View>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        )
    }
}

export default ProfileScreen