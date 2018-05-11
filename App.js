import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from './app/resources/i18n/i18n';
import LoginScreen from './app/components/screens/login';
import store from './app/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <LoginScreen/>
     </Provider>
    );
  }
}