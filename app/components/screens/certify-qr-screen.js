import React from 'react'
import { Alert, View, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Container, Header, Drawer, Body, Title, Subtitle, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles, darkGreen, headerHeight, marginHeader } from '../../resources/styles'
import I18n from '../../resources/i18n'
import SideBar from '../custom/sideMenu'

import { Dimensions } from 'react-native'

// Ancho y alto de la pantalla
const widthscreen = Dimensions.get('window').width
const heightscreen = Dimensions.get('window').height

const CustomHeader = ({ title, subtitle }) => (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginTop: marginHeader, marginLeft: 15, }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >{title}</Text>
        <Text style={{ color: 'white', fontSize: 14 }} >{subtitle}</Text>
    </View>
)

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

class CertifyQRScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <CustomHeader title='Certificar presencia' subtitle='prueba' />,
        headerStyle: {
            backgroundColor: darkGreen,
            height: headerHeight,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerLeft: (
            <TouchableOpacity style={{ padding: 20, marginTop: marginHeader }} transparent onPress={() => navigation.openDrawer()}>
                <Icon style={{ color: 'white' }} name='menu' />
            </TouchableOpacity>
        )
    })

    showAbout = (e) => {
        console.log(e)
        console.log(e.type)
        console.log(e.data)
        alert("Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data);
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        onBarCodeRead={this.showAbout}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                        notAuthorizedView={<View style={styles.content}><Text>pruebaaa</Text></View>}
                        pendingAuthorizationView={<PendingView></PendingView>}
                        permissionDialogTitle={null}
                        permissionDialogMessage={null}

                    >
                        <Button onPress={() => this.props.navigation.push('CertifyRF')}>
                            <Text>Reconocimiento</Text>
                        </Button>
                        <View style={{ borderWidth: 5, height: widthscreen / 1.3, width: widthscreen / 1.3 }} >

                        </View>
                    </RNCamera>
                </Content>
            </Container>
        )
    }
}

export default CertifyQRScreen