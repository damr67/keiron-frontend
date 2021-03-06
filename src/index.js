import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import App from './App';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import DashboardContainer from './containers/DashboardContainer';
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
            <ProtectedRoute component={DashboardContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
