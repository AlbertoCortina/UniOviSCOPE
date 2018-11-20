import React from 'react'
import {Platform, Text, TouchableOpacity, View} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {Container} from 'native-base'
import {black, certifyQRStyles as styles, white} from '../../resources/styles'
import {Icon} from 'react-native-elements'
import {withNavigationFocus, NavigationActions} from 'react-navigation'

/**
 * Componente para mostrar un icono u otro dependiendo del sistema
 * operativo del dispositivo móvil en el que se ejecute.
 */
const CameraIcon = Platform.select({
    ios: () => (
        <Icon type='ionicon' name='ios-camera' color={white} size={40}/>
    ),
    android: () => (
        <Icon type='ionicon' name='md-camera' color={black} size={40}/>
    )
})

/**
 * Componente que se muestra cuando el usuario no autorizo el uso de la
 * cámara o la cámara todavía no se abrió.
 *
 * @param text Texto opcional
 * @returns {*}
 * @constructor
 */
const CommonView = ({text}) => (
    <View style={styles.container}>
        <Text>{text}</Text>
    </View>
)

/**
 * Clase CertifyFrScreen.
 *
 * Componente para el reconocimiento facial.
 *
 * @author Alberto Cortina Eduarte
 */
class CertifyFrScreen extends React.Component {

    resetStackNavigator() {
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'CertifyQR' })
            ]
        })

        this.props.navigation.dispatch(resetAction)
    }

    takePicture = async function () {
        if (this.camera) {
            const options = {quality: 0.5, doNotSave: true, base64: true};
            const data = await this.camera.takePictureAsync(options)
            this.props.certifyAttendance(data.base64, this.props.certificate, this.props.bearerToken)
            this.props.navigation.navigate('Home')
            this.resetStackNavigator()
        }
    }

    renderCamera() {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return <CommonView/>
        } else if (isFocused) {
            return (
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.camera}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    type={RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    notAuthorizedView={<CommonView/>}
                    pendingAuthorizationView={<CommonView/>}>
                    <View style={styles.cameraButtonContainer}>
                        <TouchableOpacity style={styles.cameraIcon}
                                          onPress={this.takePicture.bind(this)}>
                            <CameraIcon/>
                        </TouchableOpacity>
                    </View>
                </RNCamera>
            )
        }
    }

    render() {
        return (
            <Container>
                {this.renderCamera()}
            </Container>
        )
    }

}

export default withNavigationFocus(CertifyFrScreen)