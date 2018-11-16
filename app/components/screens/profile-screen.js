import React from 'react'
import {ScrollView, View,} from 'react-native'
import {Button, Input, Item, Label, Text} from 'native-base'
import {Avatar} from 'react-native-elements'
import I18n from '../../resources/i18n'
import {profileStyles as styles} from '../../resources/styles'

/**
 * Clase ProfileScreen.
 *
 * Componente para la visualización de la información personal.
 *
 * @author Alberto Cortina Eduarte
 */
class ProfileScreen extends React.Component {

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.iconRow}>
                    <Avatar xlarge
                            rounded
                            icon={{type: 'ionicon', name: 'md-person'}}/>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>
                            {I18n.t('nombre_apellidos')}
                        </Label>
                        <Input style={styles.input}
                               value={this.props.firstnameAndLastname}
                               disabled/>
                    </Item>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>
                            {I18n.t('email')}
                        </Label>
                        <Input style={styles.input}
                               value={this.props.email}
                               disabled/>
                    </Item>
                </View>

                <View style={styles.formRow}>
                    <Item stackedLabel>
                        <Label style={styles.label}>{I18n.t('dni')}</Label>
                        <Input style={styles.input}
                               value={this.props.dni}
                               disabled/>
                    </Item>
                </View>

                <View style={styles.buttonRow}>
                    <Button style={styles.button}
                            onPress={() => {
                                this.props.logOut()
                            }}>
                        <Text>{I18n.t('cerrar_sesion')}</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }

}

export default ProfileScreen