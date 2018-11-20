import React from 'react'
import {Text, View} from 'react-native'

/**
 * Clase SeminarSessionsScreen.
 *
 * Componente para visualizar las sesiones de seminario.
 *
 * @author Alberto Cortina Eduarte
 */
class SeminarSessionsScreen extends React.Component {

    componentDidMount() {
        const idSubject = this.props.navigation.getParam('idSubject')

        this.props.getSessions(this.props.bearerToken, this.props.idStudent, idSubject, 'SEMINAR')
        console.log('seminario')
    }

    render() {
        return (
            <View><Text>{this.props.theorySessions}</Text></View>
        )
    }

}

export default SeminarSessionsScreen