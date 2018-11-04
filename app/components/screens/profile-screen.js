/**
 * Profile Screen
 *
 * Pantalla de datos de usuario de la aplicación.
 */
import React from 'react'
import {View, ScrollView, StatusBar,} from 'react-native'
import {Item, Input, Label, Text, Button} from 'native-base'
import {Avatar} from 'react-native-elements'
import I18n from '../../resources/i18n'
import ActivityIndicator from '../custom/custom-activityIndicator'
import {profileStyles as styles, statusBarDarkGreenColor} from '../../resources/styles'

class ProfileScreen extends React.Component {

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar opaque animated backgroundColor={statusBarDarkGreenColor}/>
                <View style={styles.iconRow}>
                    <Avatar
                        xlarge
                        rounded
                        icon={{type: 'ionicon', name: 'md-person'}}/>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>{I18n.t('nombre_apellidos')}</Label>
                        <Input style={styles.input} value={this.props.firstNameAndLastName} disabled={true}/>
                    </Item>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>{I18n.t('email')}</Label>
                        <Input style={styles.input} value={this.props.email} disabled={true}/>
                    </Item>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>{I18n.t('dni')}</Label>
                        <Input style={styles.input} value={this.props.dni} disabled={true}/>
                    </Item>
                </View>

                <View style={styles.buttonRow}>
                    <Button style={styles.button} onPress={() => {
                        this.props.logOut()
                    }}>
                        <Text>{I18n.t('cerrar_sesion')}</Text>
                    </Button>
                </View>

                <ActivityIndicator isLoading={this.props.isLoading}/>
            </ScrollView>
        )
    }
}

export default ProfileScreen