/**
 * Profile Screen
 *
 * Pantalla de perfil a la aplicación.
 */
import React from 'react'
import {View, ScrollView,} from 'react-native'
import {Container, Content, Form, Item, Input, Label, Text, Button, TouchableWithoutFeedback, Row} from 'native-base';
import {Avatar} from 'react-native-elements'
import {profileStyles as styles} from '../../resources/styles'
import I18n from "../../resources/i18n";
import ActivityIndicator from "../custom/custom-activityIndicator"

class ProfileScreen extends React.Component {

    render() {
        return (
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                padding: 10,
                backgroundColor: '#e5fce8'
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 9,
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 20,
                }}>
                    <Avatar
                        xlarge
                        rounded
                        icon={{type: 'ionicon', name: 'md-person'}}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 3
                }}>
                    <Item stackedLabel>
                        <Label style={{
                            fontFamily: 'Montserrat',
                            color: 'black',
                            fontWeight: 'bold'
                        }}>{I18n.t('nombre_apellidos')}</Label>
                        <Input style={{fontFamily: 'Montserrat', opacity: 0.5}}
                               value={this.props.firstNameAndLastName}
                               disabled={true}/>
                    </Item>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 3
                }}>
                    <Item stackedLabel>
                        <Label
                            style={{
                                fontFamily: 'Montserrat',
                                color: 'black',
                                fontWeight: 'bold'
                            }}>{I18n.t('email')}</Label>
                        <Input style={{fontFamily: 'Montserrat', opacity: 0.5}}
                               value={this.props.email}
                               disabled={true}/>
                    </Item>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 3
                }}>
                    <Item stackedLabel>
                        <Label
                            style={{
                                fontFamily: 'Montserrat',
                                color: 'black',
                                fontWeight: 'bold'
                            }}>{I18n.t('dni')}</Label>
                        <Input style={{fontFamily: 'Montserrat', opacity: 0.5}} value={this.props.dni}
                               disabled={true}/>
                    </Item>

                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <Button style={{
                        backgroundColor: '#d3a01e',
                        height: 40,
                        marginTop: 15,
                    }} onPress={() => {
                        this.props.logOut();
                    }}>
                        <Text style={styles.buttonText}>{I18n.t('cerrar_sesion')}</Text>
                    </Button>
                    <ActivityIndicator isLoading={this.props.isLoading}/>
                </View>


            </ScrollView>

        )
    }
}

export default ProfileScreen