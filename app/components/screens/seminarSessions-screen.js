import React from 'react'
import {Text, View} from 'react-native'
import CustomTable from "../custom/custom-table";

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
    }

    render() {
        return (
            <CustomTable data={this.props.seminarSessions}/>
        )
    }

}

export default SeminarSessionsScreen