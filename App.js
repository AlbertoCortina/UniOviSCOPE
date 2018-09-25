import React from 'react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import { store, persistor } from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import StartContainer from './app/containers/start-container'
import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {
  
  renderLoading = () => {
    SplashScreen.hide()
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <StartContainer />
          </PersistGate>
        </Provider>
      </Root>
    )
  }
}