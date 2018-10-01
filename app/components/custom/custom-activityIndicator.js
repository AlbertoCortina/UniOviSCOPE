/**
 * Custom ActivityIndicator.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, Modal } from 'react-native';
import { loaderStyles as styles } from '../../resources/styles';
import ActivityIndicatorAnimation from './custom-activityIndicatorAnimation'

class ActivityIndicator extends React.Component {

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.isLoading}
                onRequestClose={() => { }}>
                <View style={styles.screen}>
                    <ActivityIndicatorAnimation
                        width={80} height={80} />
                </View>
            </Modal>
        )
    }
}

export default ActivityIndicator