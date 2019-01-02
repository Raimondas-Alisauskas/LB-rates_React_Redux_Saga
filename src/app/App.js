import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './state-management/store';
import MainLayout from './layouts/mainLayout/MainLayout';

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <BrowserRouter>
          <Route path="/" component={MainLayout} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
