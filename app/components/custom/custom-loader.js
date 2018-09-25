/**
 * Custom Loading.
 * 
 * Componente personalizado para los tiempos de espera.
 */
import React from 'react';
import { View, Modal } from 'react-native';
import { loaderStyles as styles } from '../../resources/styles';
import ActivityIndicator from './custom-activityIndicator'

class Loader extends React.Component {

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.isLoading}
                onRequestClose={() => { }}>
                <View style={styles.screen}>
                    {/* <View style={styles.modal}>
                        <ActivityIndicator
                            width={80} height={80} />
                    </View> */}                    
                    <ActivityIndicator
                            width={80} height={80} />
                </View>
            </Modal>
        )
    }
}

export default Loader