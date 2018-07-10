import React from 'react'
import { View } from 'react-native'
import { separatorStyles as styles } from '../../resources/styles'

class Separator extends React.Component {
    render() {
        return (
            <View style={styles.separator} />
        )
    }
}

export default Separator