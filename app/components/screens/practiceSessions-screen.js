import React from 'react'
import {Text, View} from 'react-native'
import CustomTable from "../custom/custom-table";

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
    }

    render() {
        return (
            <CustomTable data={this.props.practiceSessions}/>
        )
    }

}

export default PracticeSessionsScreen