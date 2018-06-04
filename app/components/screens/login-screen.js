/**
 * Login Screen.
 */
import React from 'react';
import { View, Image, Keyboard, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { loginStyles as styles } from '../../resources/styles/styles';
import { Container, Header, Content, Item, Input, Text, Button, Left, Toast, InputGroup } from 'native-base';
import I18n from '../../resources/i18n/i18n';
import Icon from 'react-native-vector-icons/Entypo';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    showMessage() {
        if (this.props.loggingState === 'IN_PROGRESS') {
            // HAbria que mostrar algo que indique que esta cargando
            return (<Text>Haciendo peticion</Text>)
        }
        if (this.props.loggingState === 'EMPTY') {
            // Habria que mostar un mensaje
            return (<Text>Usuario o contraseña vacios</Text>)
        }
        if (this.props.loggingState === 'OFFLINE') {
            // Habria que mostrar un mensaje
            return (<Text>No hay conexion a internet</Text>)
        }
        if (this.props.loggingState === 'ERROR') {
            // Habria que mostrar un mensaje
            return (<Text>Servicio innacesible</Text>)
        }
        if (this.props.loggingState === 'LOGGED') {
            // Habria que ir a la pantalla de inicio
            return (<Text>Logeado correctamente</Text>)
        }
        if (this.props.loggingState === 'NOT_LOGGED') {
            // Habria que mostrar un mensaje
            return (<Text>Credenciales invalidad</Text>)
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >
                <TouchableWithoutFeedback style={{ flex: 1 }}
                    onPress={Keyboard.dismiss}>
                    <Container style={styles.container}>
                        <Header noShadow style={styles.header} />
                        <Content padder>
                            <Image style={styles.logo}
                                resizeMode={'contain'}
                                source={require('../../resources/images/logo.png')} />
                            <InputGroup rounded style={styles.input}>
                                <Icon name='user' style={{ fontSize: 25, paddingLeft: 5 }} />
                                <Input placeholder={I18n.t('usuario')} keyboardType='default'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    style={{ color: '#F5A700', opacity: 1 }}
                                    onSubmitEditing={(event) => this._txtPassword._root.focus()}
                                    value={this.state.username}
                                    onChangeText={(username) => this.setState({ username })} />
                            </InputGroup>
                            <InputGroup rounded style={styles.input}>
                                <Icon name='lock' style={{ fontSize: 25, paddingLeft: 5, opacity: 0.5 }} />
                                <Input placeholder={I18n.t('contrasenia')}
                                    returnKeyType='done'
                                    secureTextEntry
                                    autoCorrect={false}
                                    style={{ color: '#F5A700', opacity: 1 }}
                                    ref={(password) => this._txtPassword = password}
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })} />
                            </InputGroup>
                            <Button rounded style={styles.button} onPress={() => this.props.loginAction(this.state.username, this.state.password)}>
                                <Text style={styles.buttonText}>{I18n.t('iniciar_sesion')}</Text>
                            </Button>
                        </Content>
                    </Container>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView >
        )
    }
}

export default LoginScreen