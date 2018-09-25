/**
 * Custom ActivityIndicator.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, ImageBackground, Animated, Easing } from 'react-native';
import { activityIndicatorSytles as styles } from '../../resources/styles';

class ActivityIndicator extends React.Component {

    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin()
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 2000, //Hace que gire más rapido o más despacio
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.container}>
                <ImageBackground resizeMode={'contain'}
                    style={styles.imageBackground}
                    style={{ width: this.props.width, height: this.props.height }}
                    source={require('../../resources/images/logo-letras.png')} >
                    <Animated.Image resizeMode={'contain'}
                        style={styles.animatedImage}
                        style={{ width: this.props.width, height: this.props.height, transform: [{ rotate: spin }] }}
                        source={require('../../resources/images/logo-circulo.png')} />
                </ImageBackground>
            </View >
        )
    }
}

export default ActivityIndicator