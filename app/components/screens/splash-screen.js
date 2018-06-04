/**
 * Splash Screen.
 */
import React from 'react'
import { View, StatusBar, Dimensions } from 'react-native'
import { splashStyles as styles } from '../../resources/styles/styles'
import CustomLoading from '../others/custom-loading'

// Ancho y alto de la imagen de carga (es un cuadrado)
const size = Dimensions.get('window').width * 80 / 100;

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <CustomLoading width={size} height={size} />
    </View>
  )
}

export default SplashScreen