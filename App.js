import React from 'react';
import MainNavigation from './src/Navigations/MainNavigator';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { reducer } from './src/Redux/Reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk))

  const App = () => {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  };

export default App;