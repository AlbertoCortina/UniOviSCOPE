/**
 * Custom Loading.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, Text, Image, ImageBackground, Animated, Easing, Modal, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { loadingStyles as styles } from '../../resources/styles';

class Loader extends React.Component {

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.isLoading}
                onRequestClose={() => { console.log('close modal') }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: '#00000033'
                }}>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <ActivityIndicator
                            animating={this.props.isLoading} />
                    </View>
                </View>
            </Modal>
        )
    }
}

export default Loader