import React from 'react'
import {Text, View} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {withNavigationFocus} from 'react-navigation'
import {Container} from 'native-base'
import {certifyQRStyles as styles} from '../../resources/styles'
import {OFF, ON} from '../../actions'

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
 * Clase CertifyQrScreen.
 *
 * Componente para el escaneo del código QR.
 *
 * @author Alberto Cortina Eduarte
 */
class CertifyQrScreen extends React.Component {

    qrCodeRead(sessionToken) {
        this.props.verifyQRCode(sessionToken, this.props.bearerToken, this.props.username)

        if (this.props.certificate.validated && this.props.faceRecognition === OFF) {
            this.props.certifyAttendance(null, this.props.certificate, this.props.bearerToken)
            this.props.navigation.navigate('Home')
        } else if (this.props.certificate.validated && this.props.faceRecognition === ON) {
            this.props.navigation.navigate('CertifyFR')
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
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    onBarCodeRead={(code) => this.qrCodeRead(code.data)}
                    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                    notAuthorizedView={<CommonView/>}
                    pendingAuthorizationView={<CommonView/>}>
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

export default withNavigationFocus(CertifyQrScreen)