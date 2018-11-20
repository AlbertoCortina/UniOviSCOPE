import React from 'react'
import {View} from 'react-native'
import CustomTable from '../custom/custom-table'

/**
 * Clase TheorySessionsScreen.
 *
 * Componente para visualizar las sesiones de teoría.
 *
 * @author Alberto Cortina Eduarte
 */
class TheorySessionsScreen extends React.Component {

    componentDidMount() {
        const idSubject = this.props.navigation.getParam('idSubject')

        this.props.getSessions(this.props.bearerToken, this.props.idStudent, idSubject, 'THEORY')
        console.log('teoria')
    }

    render() {
        return (
            <View>
                <CustomTable data={this.props.theorySessions}/>
            </View>
        )
    }

}

export default TheorySessionsScreen