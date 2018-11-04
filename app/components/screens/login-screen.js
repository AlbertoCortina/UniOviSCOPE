import React from 'react'
import {Image, Platform, ScrollView, StatusBar} from 'react-native'
import {Button, Input, InputGroup, Text, Toast} from 'native-base'
import {loginStyles as styles, statusBarLightGreenColor} from '../../resources/styles'
import Error from '../../containers/error-container'
import I18n from '../../resources/i18n'
import ActivityIndicator from '../custom/custom-activityIndicator'
import {Icon} from "react-native-elements";

/**
 * Clase LoginScreen.
 *
 * Componente para el inicio de sesión en la aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
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
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar opaque animated backgroundColor={statusBarLightGreenColor}/>
                <Image style={styles.logo}
                       resizeMode={'contain'}
                       source={require('../../resources/images/logo.png')}/>
                <InputGroup style={styles.userInput}>
                    <Icon type='ionicon' name={
                        Platform.OS === 'ios' ? 'ios-person' : 'md-person'
                    } iconStyle={styles.inputIcon}/>
                    <Input placeholder={I18n.t('usuario')} keyboardType='default'
                           returnKeyType='next'
                           autoCorrect={false}
                           onSubmitEditing={(event) => this._txtPassword._root.focus()}
                           value={this.state.username}
                           onChangeText={(username) => this.setState({username})}
                           style={styles.userInputText}/>
                </InputGroup>
                <InputGroup style={styles.passwordInput}>
                    <Icon type='ionicon' name={
                        Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'
                    } iconStyle={styles.inputIcon}/>
                    <Input placeholder={I18n.t('contrasenia')}
                           returnKeyType='done'
                           secureTextEntry
                           autoCorrect={false}
                           ref={(password) => this._txtPassword = password}
                           value={this.state.password}
                           onChangeText={(password) => this.setState({password})}
                           style={styles.passwordInputText}/>
                </InputGroup>
                <Button style={styles.button} onPress={() => {
                    this.validateFields() && this.props.logIn(this.state.username, this.state.password);
                }}>
                    <Text style={styles.buttonText}>{I18n.t('iniciar_sesion')}</Text>
                </Button>
                <Error/>
                <ActivityIndicator isLoading={this.props.isLoading} size={80}/>
            </ScrollView>
        )
    }
}

export default LoginScreen