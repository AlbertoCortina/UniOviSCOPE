import React from 'react'
import {Dimensions, View} from 'react-native'
import Table from 'react-native-simple-table'

const columns = [
    {
        title: 'Localización',
        dataIndex: 'location',
        width:80
    },
    {
        title: 'Fecha',
        dataIndex: 'start',
    },
    {
        title: 'Grupo',
        dataIndex: 'groupCode',
        width: 60
    },
    {
        title: 'Asis',
        dataIndex: 'assistence'
    },
];

class MyTable extends React.Component {

    render() {
        return (
            <View >
                <Table height={Dimensions.get('window').height} columns={columns}
                       dataSource={this.props.data}/>
            </View>
        )
    }
}

export default MyTable