import React from 'react'
import {StatusBar, Text, View, Button} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {withNavigationFocus} from 'react-navigation'
import {Container} from 'native-base'
import Error from '../containers/notification-container'
import {certifyQRStyles as styles, statusBarDarkGreenColor} from '../../resources/styles'
import {OFF, ON} from '../../actions'

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

    constructor(props) {
        super(props);
        this.state = {
            display: 'block'
        };
    }

    qrCodeRead(sessionToken) {
        this.props.verifyQRCode(sessionToken, this.props.bearerToken, this.props.username)

        if (this.props.certificate.validated && this.props.faceRecognition === OFF) {
            this.props.certifyAttendance(this.props.certificate, this.props.bearerToken)
            this.props.navigation.navigate('Home')
        } else if (this.props.certificate.validated && this.props.faceRecognition === ON) {
            this.props.navigation.navigate('CertifyFR')
        }
    }

    renderCamera() {

        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return <View/>
        } else if (isFocused) {
            return (
                <RNCamera
                    style={{display: this.state.display}}
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
                    <Button onPress={() => this.setState({display: 'block'})} title={"Resume Preview"}></Button>
                    <Button onPress={() => this.setState({display: 'none'})} title={"Pause Preview"}></Button>
                </RNCamera>
            )
        }
    }

    render() {
        return (
            <Container>
                <StatusBar opaque animated backgroundColor={statusBarDarkGreenColor}/>
                {this.renderCamera()}
            </Container>
        )
    }

}

export default withNavigationFocus(CertifyQrScreen);