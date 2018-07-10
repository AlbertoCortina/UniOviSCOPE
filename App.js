import React from 'react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import store from './app/store'
import StartContainer from './app/containers/start-container'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <StartContainer />
        </Provider>
      </Root>
    )
  }
}