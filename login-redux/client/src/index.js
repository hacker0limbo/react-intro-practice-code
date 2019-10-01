import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar'
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import rootReducer from './reducers'

import './index.css'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavigationBar />
      {routes}
    </Router>
  </Provider>, 
  document.getElementById('root')  
)

serviceWorker.unregister();
