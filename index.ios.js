import React from 'react'
import { AppRegistry } from 'react-native'
import AppContainer from './app/containers/AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('cocktailsearch', () => App);
