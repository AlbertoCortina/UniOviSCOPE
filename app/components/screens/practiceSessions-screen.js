import React from 'react'
import {Text, View} from 'react-native'

/**
 * Clase PracticeSessionsScreen.
 *
 * Componente para visualizar las sesiones de práctica.
 *
 * @author Alberto Cortina Eduarte
 */
class PracticeSessionsScreen extends React.Component {

    componentDidMount() {
        const idSubject = this.props.navigation.getParam('idSubject')

        this.props.getSessions(this.props.bearerToken, this.props.idStudent, idSubject, 'PRACTICE')
        console.log('practica')
    }

    render() {
        return (
            <View><Text>prueb</Text></View>
        )
    }

}

export default PracticeSessionsScreen