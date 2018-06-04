/**
 * Login Screen
 */
import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, ActivityIndicator, Dimensions, Keyboard, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import I18n from '../../resources/i18n/i18n';
import { loginAction } from '../../actions/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginStyles as styles } from '../../resources/styles/styles';
import { InputGroup } from 'native-base';

// Ancho y alto de la imagen
const width = Dimensions.get('window').width * 50 / 100;
const height = Dimensions.get('window').height * 50 / 100;

class LoginScreen extends React.Component {
  render() {
    console.log(this.props.loading);

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} backgroundColor='green'
          barStyle='light-content' />
        <KeyboardAvoidingView behavior='padding'
          style={styles.container}>
          <TouchableWithoutFeedback style={styles.container}
            onPress={Keyboard.dismiss}>
            <View style={styles.container} >
              <View style={styles.logoContainer}>
                <Image style={{ width: width, height: height }}
                  resizeMode={'contain'}
                  source={require('../../resources/images/logo.png')} />
              </View>
              <View style={styles.infoContainer}>
                <InputGroup rounded>
                  <Icon name='menu'/>
                  <Input style={styles.input}
                    placeholder={I18n.t('usuario')}
                    keyboardType='default'
                    returnKeyType='next'
                    autoCorrect={false}
                    onSubmitEditing={(event) => this.refs.txtPassword._texInput.focus()} />
                </InputGroup>
                <InputGroup>
                  <TextInput style={styles.input}
                    placeholder={I18n.t('contrasenia')}
                    returnKeyType='done'
                    secureTextEntry
                    autoCorrect={false}
                    ref={'txtPassword'} />
                </InputGroup>
                <View style={styles.buttonContainer}>
                  <Button title={I18n.t('iniciar_sesion')}
                    color='#F5A700'
                    underlineColorAndroid='red' />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView></View>
    );
  }
}

function mapStatToProps(state, props) {
  return {
    loading: state.login.state == 'EN_CURSO'
  }
}

function mapDispatchToProps(dispatch) {

  const acciones = {
    login: loginAction
  };

  return bindActionCreators(acciones, dispatch);
}

export default connect(mapStatToProps, mapDispatchToProps)(LoginScreen);