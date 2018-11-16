import React from 'react'
import {Provider} from 'react-redux'
import {Root} from 'native-base'
import {store, persistor} from './app/store'
import {PersistGate} from 'redux-persist/integration/react'
import StartContainer from './app/components/containers/start-container'
import SplashScreen from 'react-native-splash-screen'

/**
 * Clase App.
 *
 * Componente principal de la aplicación.
 *
 * @author Alberto Cortina Eduarte
 */
class App extends React.Component {

    renderLoading() {
        setTimeout(() => SplashScreen.hide() , 1000);
    }

    render() {
        return (
            <Root>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={this.renderLoading()}>
                        <StartContainer/>
                    </PersistGate>
                </Provider>
            </Root>
        )
    }

}

export default App