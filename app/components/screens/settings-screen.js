import React from 'react'
import { View } from 'react-native'
import { Container, Header, Drawer, Body, Title, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles } from '../../resources/styles'
import Separator from '../custom/custom-separator'
import I18n from '../../resources/i18n'
import SideBar from '../custom/custom-sideBar'

class SettingsScreen extends React.Component {

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
                        <Body>
                            <Title>{I18n.t('ajustes')}</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginRight: 10 }}>
                                <Icon style={{ fontSize: 40, color: '#d3a01e' }} type='FontAwesome' name='smile-o' />
                            </View>
                            <View style={{ flex: 7 , flexWrap:'wrap'}}>
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
            </Drawer>
        )
    }
}

export default SettingsScreen