import { createStackNavigator } from 'react-navigation'
import CertifyQRContainer from '../../containers/certify-qr-container'
import CertifyRFContainer from '../../containers/certify-rf-container'

export default createStackNavigator(
    {
        CertifyQR: {
            screen: CertifyQRContainer,
        },
        CertifyRF: {
            screen: CertifyRFContainer,
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            header: {
                visible: false,
            },
        },
    }
)