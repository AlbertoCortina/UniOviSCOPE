import React from 'react'
import { StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import { Container, Header, Drawer, Body, Title, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { homeStyles as styles, darkGreen, headerHeight, marginHeader } from '../../resources/styles'
import { APP_NAME } from '../../util'
import I18n from '../../resources/i18n'
import SideBar from '../custom/sideMenu'

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: I18n.t('inicio'),
        headerStyle: {
            backgroundColor: darkGreen,
            height: headerHeight,
        },
        headerTitleStyle: {
            color: 'white',
            marginTop: marginHeader,
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
                <Content padder contentContainerStyle={styles.content}>
                    <ImageBackground resizeMode={'contain'}
                        style={styles.imageBackground}
                        source={require('../../resources/images/logo.png')} />
                    <Button rounded iconLeft style={styles.button} onPress={() => this.props.navigation.navigate('Certify')}>
                        <Icon style={styles.buttonIcon} type='FontAwesome' name='check-square-o' />
                        <Text style={styles.buttonText} >{I18n.t('certificar_presencia')}</Text>
                    </Button>
                    <Button rounded iconLeft style={styles.button} onPress={() => this.props.navigation.navigate('Check')}>
                        <Icon style={styles.buttonIcon} type='FontAwesome' name='calendar-check-o' />
                        <Text style={styles.buttonText} >{I18n.t('revisar_asistencias')}</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen