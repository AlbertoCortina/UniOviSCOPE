import React from 'react'
import { View } from 'react-native'
import { Container, Header, Drawer, Body, Title, Subtitle, List, ListItem, Icon, Content, Text, Button, Left, Right } from 'native-base'
import { settingsStyles as styles } from '../../resources/styles'
import I18n from '../../resources/i18n'
import SideBar from '../custom/sideMenu'

class CheckSubjectsScreen extends React.Component {
    openDrawer = () => {
        this._drawer._root.open()
    }

    render() {
        var items = [
            'Simon Mignolet',
            'Nathaniel Clyne',
            'Dejan Lovren',
            'Mama Sakho',
            'Emre Can'
        ];
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
                            <Title>{I18n.t('asignaturas')}</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder contentContainerStyle={styles.content}>
                        <List dataArray={items}
                            renderRow={(item) =>
                                <ListItem>
                                    <Text>{item}</Text>
                                </ListItem>
                            }>
                        </List>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default CheckSubjectsScreen