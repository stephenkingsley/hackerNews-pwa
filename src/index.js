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
            <li><Link to="/">NEWS</Link></li>
            <li><Link to="/newest">NEW</Link></li>
            <li><Link to="/show">SHOW</Link></li>
            <li><Link to="/ask">ASK</Link></li>
            <li><Link to="/jobs">JOBS</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={App} />
        <Route exact path="/show" component={Show} />
        <Route exact path="/ask" component={Ask} />
        <Route exact path="/newest" component={Newest} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/item/:id" component={Story} />
      </div>
      </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
