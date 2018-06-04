/**
 * Login Screen.
 */
import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, ActivityIndicator, Keyboard, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { loginStyles as styles } from '../../resources/styles/styles';
import I18n from '../../resources/i18n/i18n';

class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
                <TouchableWithoutFeedback style={{flex: 1}}
                    onPress={Keyboard.dismiss}>
                    <View style={styles.container}s>
                        <Image style={styles.logo}
                            resizeMode={'contain'}
                            source={require('../../resources/images/logo.png')} />

                        <TextInput
                            style={styles.input}
                            placeholder={I18n.t('usuario')}
                            keyboardType='default'
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={() => this.refs.txtPassword.focus()} />
                        <TextInput
                            style={styles.input}
                            placeholder={I18n.t('contrasenia')}
                            returnKeyType='done'
                            secureTextEntry
                            autoCorrect={false}
                            ref={'txtPassword'} />
                        <Button title={I18n.t('iniciar_sesion')}
                            color='#F5A700'
                            underlineColorAndroid='red' />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScreen;