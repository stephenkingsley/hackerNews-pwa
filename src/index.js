import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import Show from './Show';
import Ask from './Ask';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div className="topbar">
          <ul>
            <li><Link to="/">NEWS</Link></li>
            <li><Link to="/show">SHOW</Link></li>
            <li><Link to="/ask">ASK</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={App} />
        <Route exact path="/show" component={Show} />
        <Route exact path="/ask" component={Ask} />
      </div>
      </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
