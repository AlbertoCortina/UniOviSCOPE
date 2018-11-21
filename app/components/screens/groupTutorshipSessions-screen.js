import React from 'react'
import {Text, View} from 'react-native'
import CustomTable from "../custom/custom-table";

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
    }

    render() {
        return (
            <CustomTable data={this.props.groupTutorshipSessions}/>
        )
    }

}

export default GroupTutorshipSessionsScreen