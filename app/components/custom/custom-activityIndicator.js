import React from 'react'
import {Animated, Easing, ImageBackground, Modal, View} from 'react-native'
import {activityIndicatorStyles as styles} from '../../resources/styles'

/**
 * Clase ActivityIndicator.
 *
 * Componente personalizado para los tiempos de espera.
 *
 * @author Alberto Cortina Eduarte
 */
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
                duration: 2000,
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
            <Modal
                transparent
                animationType={'none'}
                visible={this.props.isLoading}
                onRequestClose={() => {
                }}>
                <View style={styles.screen}>
                    <ImageBackground resizeMode={'contain'}
                                     style={styles.imageBackground}
                                     style={{
                                         width: this.props.size,
                                         height: this.props.size
                                     }}
                                     source={require('../../resources/images/logo_letras.png')}>
                        <Animated.Image resizeMode={'contain'}
                                        style={{
                                            width: this.props.size,
                                            height: this.props.size,
                                            transform: [{rotate: spin}]
                                        }}
                                        source={require('../../resources/images/logo_circulo.png')}/>
                    </ImageBackground>
                </View>
            </Modal>
        )
    }

}

export default ActivityIndicator