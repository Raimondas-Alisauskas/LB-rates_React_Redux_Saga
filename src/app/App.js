import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../app/state-management/store';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
