import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Header, Drawer, Body, Title, Subtitle, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles, darkGreen, marginHeader, headerHeight } from '../../resources/styles'
import I18n from '../../resources/i18n'
import { StackActions, NavigationActions } from 'react-navigation'
import SideBar from '../custom/sideMenu'

const CustomHeader = ({ title, subtitle }) => (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginTop: marginHeader, marginLeft: 15, }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }} >{title}</Text>
        <Text style={{ color: 'white', fontSize: 14 }} >{subtitle}</Text>
    </View>
)

class CertifyRFScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <CustomHeader title='Certificar presencia' subtitle='prueba recono' />,
        headerStyle: {
            backgroundColor: darkGreen,
            height: headerHeight,
        },
        headerTitleStyle: {
            color: 'white',

        },
        headerLeft: (
            <TouchableOpacity style={{ padding: 20, marginTop: marginHeader }} transparent onPress={() => navigation.goBack()}>
                <Icon style={{ color: 'white' }} type='MaterialIcons' name='arrow-back' />
            </TouchableOpacity>
        ),
        drawerLockMode:'locked-closed'
    })

    resetStack() {
        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'CertifyQR' })]
            })
        );
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>
                    <Button onPress={() => this.resetStack()}>
                        <Text>Home</Text>
                    </Button>
                </Content>
            </Container >
        )
    }
}

export default CertifyRFScreen