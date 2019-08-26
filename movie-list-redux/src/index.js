import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
)

serviceWorker.unregister();
