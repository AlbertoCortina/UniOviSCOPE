import React from 'react'
import { StatusBar, ImageBackground } from 'react-native'
import { Container, Header, Drawer, Body, Title, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { homeStyles as styles } from '../../resources/styles'
import { APP_NAME } from '../../util'
import I18n from '../../resources/i18n'
import SideBar from '../custom/custom-sideBar'

class HomeScreen extends React.Component {

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
                            <Title>{APP_NAME}</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={styles.content}>
                        <ImageBackground resizeMode={'contain'}
                            style={styles.imageBackground}
                            source={require('../../resources/images/logo.png')} />
                        <Button rounded iconLeft style={styles.button}  onPress={() => this.props.navigation.navigate('Certify')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='check-square-o' />
                            <Text style={styles.buttonText} >{I18n.t('certificar_presencia')}</Text>
                        </Button>
                        <Button rounded iconLeft style={styles.button}  onPress={() => this.props.navigation.navigate('Check')}>
                            <Icon style={styles.buttonIcon} type='FontAwesome' name='calendar-check-o' />
                            <Text style={styles.buttonText} >{I18n.t('revisar_asistencias')}</Text>
                        </Button>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default HomeScreen