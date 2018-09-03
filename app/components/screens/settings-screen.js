import React from 'react'
import { View, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { Container, Header, Drawer, Body, Title, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles, darkGreen, marginHeader, headerHeight } from '../../resources/styles'
import Separator from '../custom/custom-separator'
import I18n from '../../resources/i18n'
import SideBar from '../custom/sideMenu'

class SettingsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: I18n.t('ajustes'),
        headerStyle: {
            backgroundColor: darkGreen,
            height: headerHeight,
        },
        headerTitleStyle: {
            color: 'white',
            marginTop: marginHeader
        },
        headerLeft: (
            <TouchableOpacity style={{ padding: 20, marginTop: marginHeader }} transparent onPress={() => navigation.openDrawer()}>
                <Icon style={{ color: 'white' }} name='menu' />
            </TouchableOpacity>
        )
    })

    render() {
        return (
            <Container>
                <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated />
                <Content padder contentContainerStyle={styles.content}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginRight: 10 }}>
                            <Icon style={{ fontSize: 40, color: '#d3a01e' }} type='FontAwesome' name='smile-o' />
                        </View>
                        <View style={{ flex: 7, flexWrap: 'wrap' }}>
                            <Text>{I18n.t('opcion_reconocimiento_facial')}</Text>
                            <Text note>{I18n.t('descripcion_opcion_reconocimiento_facial')}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                        </View>
                    </View>
                    <Separator />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                            <Icon style={{ fontSize: 40, color: '#d3a01e' }} type='FontAwesome' name='home' />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text>{I18n.t('opcion_pantalla_inicial')}</Text>
                            <Text note>{I18n.t('descripcion_opcion_pantalla_inicial')}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default SettingsScreen