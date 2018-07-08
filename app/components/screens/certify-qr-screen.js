import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Header, Drawer, Body, Title, Subtitle, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles, darkGreen } from '../../resources/styles'
import I18n from '../../resources/i18n'
import SideBar from '../custom/custom-sideBar'

const CustomHeader = ({ title, subtitle }) => (
    <View >
        <Text >{title}</Text>
        <Text >{subtitle}</Text>
    </View>
);

class CertifyQRScreen extends React.Component {

    static navigationOptions = {
        headerTitle: <CustomHeader title='Certificar presencia' subtitle='prueba' />,
        headerStyle: {
            backgroundColor: '#008279', // <-- orangey red
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'normal',
        },
        headerLeft: (
            <TouchableOpacity
                style={{
                    height: 45,
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(250, 250, 250, 0.7)',
                    borderRadius: 50,
                    margin: 5,
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    shadowOffset: {
                        width: 2,
                        height: 2,
                    }
                }}
            >
                <Text style={{ fontSize: 30, color: '#2980b9' }}>
                    ✌︎
                </Text>
            </TouchableOpacity>)
    }

    openDrawer = () => {
        this._drawer._root.open()
    }

    render() {
        return (
            <Drawer panOpenMask={.25} side="left" ref={(ref) => this._drawer = ref} content={<SideBar {...this.props} />} >
                <Container>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 2, marginLeft: 20 }}>
                            <Title>{I18n.t('certificar_presencia')}</Title>
                            <Subtitle>prueba</Subtitle>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={styles.content}>
                        <View>
                            <Button onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Home</Text>
                            </Button>

                            <Button onPress={() => this.props.navigation.push('CertifyRF')}>
                                <Text>Reconocimiento</Text>
                            </Button>

                        </View>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default CertifyQRScreen