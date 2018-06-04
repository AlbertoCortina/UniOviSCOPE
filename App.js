import React from 'react';
import LoginContainer from './app/containers/login-container';
import store from './app/store';
import { Provider } from 'react-redux';
import { Root } from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <LoginContainer />
        </Provider>
      </Root>
    );
  }
}