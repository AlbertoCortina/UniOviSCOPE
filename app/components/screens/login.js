/**
 * Login Screen
 */
import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, ActivityIndicator } from 'react-native';
import I18n from '../../resources/i18n/i18n';
import { loginAction } from '../../actions/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  render() {
    console.log(this.props.loading);

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={require('../../resources/images/ic_launcher.png')}/>
        <TextInput placeholder="usuario"/>
        <TextInput placeholder="contraseña"/>
        <Button onPress={this.props.login} title="Iniciar sesión"/>
        {this.progreso()}
      </View>
    );
  }

  progreso() {
    if (this.props.loading) {
      return (
        <ActivityIndicator/>
      );
    }
    else {
      return null;
    }
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