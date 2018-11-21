import React from 'react'
import {Dimensions, View} from 'react-native'
import Table from 'react-native-simple-table'
import I18n from '../../resources/i18n'
import {tableStyles as styles} from '../../resources/styles'

const columns = [
    {
        title: I18n.t('localizacion'),
        dataIndex: 'location',
    },
    {
        title: I18n.t('fecha'),
        dataIndex: 'date',
        width: Dimensions.get('window').width / 2.2
    },
    {
        title: I18n.t('grupo'),
        dataIndex: 'groupCode',
        width: Dimensions.get('window').width / 6
    },
    {
        title: '',
        dataIndex: 'assistence',
        width: Dimensions.get('window').width / 7.8
    },
]

class MyTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: null,
            width: null
        }
    }

    medirVista(event) {
        this.setState({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
        })
    }

    render() {
        return (
            <View style={styles.container}
                  onLayout={(event) => this.medirVista(event)}>
                <Table height={this.state.height}
                       columns={columns}
                       dataSource={this.props.data}
                       columnWidth={this.state.width/4}/>
            </View>
        )
    }
}

export default MyTable