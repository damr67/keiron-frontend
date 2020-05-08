import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './index.css';
import { Provider } from 'mobx-react';
import App from './App';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import DashboardContainer from './containers/DashboardContainer';
import ErrorContainer from './containers/ErrorContainer';
import PageNotFound from './containers/PageNotFound';

import store from './stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/error" component={ErrorContainer} />
            <ProtectedRoute component={DashboardContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
