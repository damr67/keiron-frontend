import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react';
import App from './App';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import UserContainer from './containers/UserContainer';
import AdminContainer from './containers/AdminContainer';
import PageNotFound from './containers/PageNotFound';

import store from './stores';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router>
        <App>
          <Switch>
            <Redirect exact path="/" to="/login" />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/user" component={UserContainer} />
            <Route path="/admin" component={AdminContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
