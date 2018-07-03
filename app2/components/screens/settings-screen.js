import React from 'react'
import { StatusBar, ImageBackground } from 'react-native'
import { Container, Header, Drawer, Body, Title, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles } from '../../resources/styles'
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
                       
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default SettingsScreen