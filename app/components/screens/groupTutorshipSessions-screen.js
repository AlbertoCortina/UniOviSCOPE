import React from 'react'
import {Text, View} from 'react-native'

/**
 * Clase GroupTutorshipSessionsScreen.
 *
 * Componente para visualizar las sesiones de tutorías grupales.
 *
 * @author Alberto Cortina Eduarte
 */
class GroupTutorshipSessionsScreen extends React.Component {

    componentDidMount() {
        const idSubject = this.props.navigation.getParam('idSubject')

        this.props.getSessions(this.props.bearerToken, this.props.idStudent, idSubject, 'GROUP_TUTORSHIP')
        console.log('tutoria')
    }

    render() {
        return (
            <View><Text>prueb</Text></View>
        )
    }

}

export default GroupTutorshipSessionsScreen