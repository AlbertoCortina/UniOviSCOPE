import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from './app/resources/i18n/i18n'
import Styles from './app/resources/styles/styles'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>{I18n.t('greeting')}Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


