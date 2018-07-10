import React from 'react'
import { StatusBar, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Container, Content, Input, Text, Icon, Button, Toast, InputGroup } from 'native-base'
import { loginStyles as styles, statusBarColor } from '../../resources/styles'
import Error from '../../containers/error-container'
import I18n from '../../resources/i18n'

class LoginScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

    componentDidUpdate() {
        if (this.state.error) {
            Toast.show({
                text: this.state.error,
                buttonText: I18n.t('toast_aceptar'),
                duration: 3000,
                type: 'warning'
            })
            this.state.error = null
        }
    }

    validateFields() {
        if (this.state.username.trim().length == 0 && this.state.password.trim().length == 0) {
            this.setState({
                error: I18n.t('error_campos_vacios')
            })
            return false
        } else if (this.state.username.trim().length == 0) {
            this.setState({
                error: I18n.t('error_usuario_vacio')
            })
            return false
        } else if (this.state.password.trim().length == 0) {
            this.setState({
                error: I18n.t('error_contrasenia_vacio')
            })
            return false
        }
        return true
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <Container style={styles.container}>
                    <StatusBar translucent backgroundColor={statusBarColor}
                        animated />
                    <Content padder>
                        <Image style={styles.logo}
                            resizeMode={'contain'}
                            source={require('../../resources/images/logo.png')} />
                        <InputGroup rounded style={styles.userInput}>
                            <Icon type='Entypo' name='user' style={styles.inputIcon} />
                            <Input placeholder={I18n.t('usuario')} keyboardType='default'
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={(event) => this._txtPassword._root.focus()}
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username })} />
                        </InputGroup>
                        <InputGroup rounded style={styles.passwordInput}>
                            <Icon type='Entypo' name='lock' style={styles.inputIcon} />
                            <Input placeholder={I18n.t('contrasenia')}
                                returnKeyType='done'
                                secureTextEntry
                                autoCorrect={false}
                                ref={(password) => this._txtPassword = password}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })} />
                        </InputGroup>
                        <Button rounded iconRight style={styles.button} onPress={() => {
                            this.validateFields() && this.props.login(this.state.username, this.state.password);
                        }}>
                            <Text style={styles.buttonText}>{I18n.t('iniciar_sesion')}</Text>
                            <Icon type='FontAwesome' name='sign-in' style={styles.buttonIcon} />
                        </Button>
                        <Error />
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        )
    }
}

export default LoginScreen