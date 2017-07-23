import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Default from './Default';
import App from './App';
import Newest from './Newest';
import Show from './Show';
import Ask from './Ask';
import Jobs from './Jobs';
import Story from './Story';

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
          <img
            style={{
              width: '20px',
              height: '20px',
            }}
            src="https://news.ycombinator.com/y18.gif"
            alt="logo"
          />
          <ul>
            <li><Link to="/1">NEWS</Link></li>
            <li><Link to="/newest/1">NEW</Link></li>
            <li><Link to="/show/1">SHOW</Link></li>
            <li><Link to="/ask/1">ASK</Link></li>
            <li><Link to="/jobs/1">JOBS</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Default} />
        <Route exact path="/:page" component={App} />
        <Route exact path="/show/:page" component={Show} />
        <Route exact path="/ask/:page" component={Ask} />
        <Route exact path="/newest/:page" component={Newest} />
        <Route exact path="/jobs/:page" component={Jobs} />
        <Route exact path="/item/:id" component={Story} />
      </div>
      </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
