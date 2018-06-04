/**
 * Custom Loading.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, Image, ImageBackground, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { loadingStyles as styles } from '../../resources/styles/styles';

export default class Loading extends React.Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }

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
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const { width, height } = this.props;

        return (
            <View style={styles.container}>
                <ImageBackground resizeMode={'contain'}
                    style={{ width: width, height: height }}
                    source={require('../../resources/images/logo-letras.png')} >
                    <Animated.Image resizeMode={'contain'}
                        style={{ width: width, height: height, transform: [{ rotate: spin }] }}
                        source={require('../../resources/images/logo-circulo.png')} />
                </ImageBackground>
            </View >
        );
    }
}